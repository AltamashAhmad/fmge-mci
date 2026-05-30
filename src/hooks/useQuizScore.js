import { useCallback } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const LS_KEY = "fmge.quizHistory";
const LS_SUMMARY_PREFIX = "fmge.quizSummary.";

// Firestore: users/{uid}/attempts/{autoId}
// Firestore: users/{uid}/quizSummary/{subjectSlug}
// Guest fallback: localStorage

export function useQuizScore() {
  const { currentUser } = useAuth();

  const saveAttempt = useCallback(
    async ({ subject, topic, mode, score, total, pct, timeSpent, answers }) => {
      const attempt = {
        subject,
        topic,
        mode,
        score,
        total,
        pct,
        timeSpent: timeSpent ?? null,
        answers: answers ?? [],
        ts: serverTimestamp(),
      };

      if (currentUser) {
        // Save attempt to Firestore
        const attemptsRef = collection(db, "users", currentUser.uid, "attempts");
        await addDoc(attemptsRef, attempt);

        // Update quizSummary per subject
        if (subject !== "grand-test") {
          const summaryRef = doc(db, "users", currentUser.uid, "quizSummary", subject);
          const snap = await getDoc(summaryRef);
          const existing = snap.exists() ? snap.data() : {};

          const prev = existing.accuracy ?? 0;
          const prevAttempted = existing.attempted ?? 0;
          const newAttempted = prevAttempted + 1;
          const newAccuracy =
            prevAttempted === 0
              ? pct
              : Math.round((prev * prevAttempted + pct) / newAttempted);

          const prevByTopic = existing.bestByTopic ?? {};
          const prevTopicData = prevByTopic[topic] ?? { best: 0, count: 0 };
          const newBest = Math.max(prevTopicData.best, pct);
          const newCount = prevTopicData.count + 1;

          await setDoc(
            summaryRef,
            {
              accuracy: newAccuracy,
              attempted: newAttempted,
              bestByTopic: {
                ...prevByTopic,
                [topic]: { best: newBest, count: newCount, lastAttempt: serverTimestamp() },
              },
            },
            { merge: true }
          );
        }
      } else {
        // Guest: localStorage
        const raw = localStorage.getItem(LS_KEY);
        const hist = raw ? JSON.parse(raw) : [];
        hist.unshift({ ...attempt, ts: Date.now() });
        localStorage.setItem(LS_KEY, JSON.stringify(hist.slice(0, 200)));

        if (subject !== "grand-test") {
          const key = LS_SUMMARY_PREFIX + subject;
          const existing = JSON.parse(localStorage.getItem(key) || "{}");
          const prev = existing.accuracy ?? 0;
          const prevAttempted = existing.attempted ?? 0;
          const newAttempted = prevAttempted + 1;
          const newAccuracy =
            prevAttempted === 0
              ? pct
              : Math.round((prev * prevAttempted + pct) / newAttempted);
          const prevByTopic = existing.bestByTopic ?? {};
          const prevTopicData = prevByTopic[topic] ?? { best: 0, count: 0 };
          localStorage.setItem(
            key,
            JSON.stringify({
              accuracy: newAccuracy,
              attempted: newAttempted,
              bestByTopic: {
                ...prevByTopic,
                [topic]: {
                  best: Math.max(prevTopicData.best, pct),
                  count: prevTopicData.count + 1,
                  lastAttempt: Date.now(),
                },
              },
            })
          );
        }
      }
    },
    [currentUser]
  );

  const loadSummary = useCallback(
    async (subjectSlug) => {
      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid, "quizSummary", subjectSlug);
        const snap = await getDoc(ref);
        return snap.exists() ? snap.data() : null;
      } else {
        const raw = localStorage.getItem(LS_SUMMARY_PREFIX + subjectSlug);
        return raw ? JSON.parse(raw) : null;
      }
    },
    [currentUser]
  );

  const loadHistory = useCallback(
    async (maxCount = 50) => {
      if (currentUser) {
        const attemptsRef = collection(db, "users", currentUser.uid, "attempts");
        const q = query(attemptsRef, orderBy("ts", "desc"), limit(maxCount));
        const snap = await getDocs(q);
        return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      } else {
        const raw = localStorage.getItem(LS_KEY);
        const hist = raw ? JSON.parse(raw) : [];
        return hist.slice(0, maxCount);
      }
    },
    [currentUser]
  );

  return { saveAttempt, loadSummary, loadHistory };
}
