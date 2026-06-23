import { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getDoc, serverTimestamp, collection, addDoc } from "firebase/firestore";
import {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
} from "../firebase";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

// Migrate all local storage guest data to Firestore
async function migrateAnonymousData(uid) {
  try {
    const allKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      allKeys.push(localStorage.key(i));
    }
    const keysToRemove = [];

    // 1. Migrate Tracker Data -> users/{uid}
    const trackerKeys = ["subjectProgress", "weeklyDone", "phaseDone", "studyDays"];
    const trackerData = {};

    trackerKeys.forEach((k) => {
      try {
        const raw = localStorage.getItem(`fmge.${k}`);
        if (raw) {
          trackerData[k] = JSON.parse(raw);
          keysToRemove.push(`fmge.${k}`);
        }
      } catch {}
    });

    allKeys.forEach(key => {
      if (key && key.startsWith("fmge.tasksToday.")) {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const dateStr = key.split("fmge.tasksToday.")[1];
            trackerData.tasksToday = trackerData.tasksToday || {};
            trackerData.tasksToday[dateStr] = JSON.parse(raw);
            keysToRemove.push(key);
          }
        } catch {}
      }
    });

    if (Object.keys(trackerData).length > 0) {
      await setDoc(doc(db, "users", uid), { ...trackerData, migratedAt: new Date().toISOString() }, { merge: true });
    }

    // 2. Migrate Bookmarks -> users/{uid}/bookmarks/{qId}
    try {
      const rawBmk = localStorage.getItem("fmge.bookmarks");
      if (rawBmk) {
        const bookmarks = JSON.parse(rawBmk);
        for (const [qId, meta] of Object.entries(bookmarks)) {
          await setDoc(doc(db, "users", uid, "bookmarks", qId), { ...meta, savedAt: meta.savedAt ? new Date(meta.savedAt) : serverTimestamp() });
        }
        keysToRemove.push("fmge.bookmarks");
      }
    } catch {}

    // 3. Migrate Quiz History -> users/{uid}/attempts/{autoId}
    try {
      const rawHist = localStorage.getItem("fmge.quizHistory");
      if (rawHist) {
        const history = JSON.parse(rawHist);
        const attemptsRef = collection(db, "users", uid, "attempts");
        for (const attempt of history) {
          const attemptData = { ...attempt, ts: attempt.ts ? new Date(attempt.ts) : serverTimestamp() };
          await addDoc(attemptsRef, attemptData);
        }
        keysToRemove.push("fmge.quizHistory");
      }
    } catch {}

    // 4. Migrate Quiz Summaries -> users/{uid}/quizSummary/{subjectSlug}
    for (const key of allKeys) {
      if (key && key.startsWith("fmge.quizSummary.")) {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const subjectSlug = key.split("fmge.quizSummary.")[1];
            const summary = JSON.parse(raw);
            if (summary.bestByTopic) {
              for (const top in summary.bestByTopic) {
                if (summary.bestByTopic[top].lastAttempt) {
                  summary.bestByTopic[top].lastAttempt = new Date(summary.bestByTopic[top].lastAttempt);
                }
              }
            }
            await setDoc(doc(db, "users", uid, "quizSummary", subjectSlug), summary, { merge: true });
            keysToRemove.push(key);
          }
        } catch {}
      }
    }

    // 5. Cleanup Local Storage to prevent duplicate uploads
    keysToRemove.forEach((k) => localStorage.removeItem(k));

  } catch (err) {
    console.error("Migration failed:", err);
  }
}

// Create or update user profile in Firestore
async function ensureUserProfile(firebaseUser) {
  try {
    const ref = doc(db, "users", firebaseUser.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        profile: {
          name: firebaseUser.displayName || "FMGE Student",
          email: firebaseUser.email || null,
          photoURL: firebaseUser.photoURL || null,
          provider: firebaseUser.providerData?.[0]?.providerId || "unknown",
          createdAt: new Date().toISOString(),
        },
        stats: {
          totalAttempted: 0,
          totalCorrect: 0,
          accuracy: 0,
          currentStreak: 0,
          longestStreak: 0,
          lastStudyDate: null,
        },
        lastActive: serverTimestamp(),
      });
    } else {
      // Update lastActive
      await setDoc(ref, { lastActive: serverTimestamp() }, { merge: true });
    }
    
    // Always attempt migration on login
    await migrateAnonymousData(firebaseUser.uid);
  } catch {
    // non-critical — offline scenario
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Fetch isAdmin status
        try {
          const snap = await getDoc(doc(db, "users", firebaseUser.uid));
          setIsAdmin(snap.exists() ? !!snap.data().isAdmin : false);
        } catch {
          setIsAdmin(false);
        }
        setLoading(false);
        // Run in background so it doesn't block the UI
        ensureUserProfile(firebaseUser);
      } else {
        setUser(null);
        setIsAdmin(false);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  async function signInWithGoogle() {
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (err) {
      setAuthError(getErrorMessage(err.code));
      throw err;
    }
  }

  async function signInWithEmail(email, password) {
    setAuthError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      setAuthError(getErrorMessage(err.code));
      throw err;
    }
  }

  async function signUpWithEmail(email, password, displayName) {
    setAuthError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }
      await ensureUserProfile(result.user);
      return result.user;
    } catch (err) {
      setAuthError(getErrorMessage(err.code));
      throw err;
    }
  }

  async function signOut() {
    setAuthError(null);
    await firebaseSignOut(auth);
  }

  const value = {
    user,
    currentUser: user, // alias used by useQuizScore, useBookmarks
    isAdmin,
    loading,
    authError,
    setAuthError,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function getErrorMessage(code) {
  const messages = {
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/popup-closed-by-user": "Sign-in was cancelled.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/invalid-credential": "Invalid email or password.",
  };
  return messages[code] || "Something went wrong. Please try again.";
}
