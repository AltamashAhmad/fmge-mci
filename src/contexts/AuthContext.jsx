import { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
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

// Migrate anonymous localStorage tracker data to Firestore for newly signed-in user
async function migrateAnonymousData(uid) {
  try {
    const trackerRef = doc(db, "users", uid, "tracker", "data");
    const existing = await getDoc(trackerRef);
    if (existing.exists()) return; // already has data, don't overwrite

    const keys = ["subjectProgress", "weeklyDone", "phaseDone", "studyDays"];
    const migrated = {};
    keys.forEach((k) => {
      try {
        const raw = localStorage.getItem(`fmge.${k}`);
        if (raw) migrated[k] = JSON.parse(raw);
      } catch {
        // ignore parse errors
      }
    });

    if (Object.keys(migrated).length > 0) {
      await setDoc(trackerRef, { ...migrated, migratedAt: new Date().toISOString() });
    }
  } catch {
    // non-critical migration — fail silently
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
      await migrateAnonymousData(firebaseUser.uid);
    } else {
      // Update lastActive
      await setDoc(ref, { lastActive: serverTimestamp() }, { merge: true });
    }
  } catch {
    // non-critical — offline scenario
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await ensureUserProfile(firebaseUser);
      }
      setUser(firebaseUser);
      setLoading(false);
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
