import { useState, useEffect, useCallback } from "react";
import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const LS_KEY = "fmge.bookmarks";

function lsGetBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  } catch {
    return {};
  }
}

function lsSetBookmarks(obj) {
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

export function useBookmarks() {
  const { currentUser } = useAuth();
  const [bookmarks, setBookmarks] = useState(new Set());

  // Load bookmarks on mount / user change
  useEffect(() => {
    async function loadBookmarks() {
      if (currentUser) {
        try {
          const ref = collection(db, "users", currentUser.uid, "bookmarks");
          const snap = await getDocs(ref);
          setBookmarks(new Set(snap.docs.map((d) => d.id)));
        } catch {
          // fall back to localStorage
          setBookmarks(new Set(Object.keys(lsGetBookmarks())));
        }
      } else {
        setBookmarks(new Set(Object.keys(lsGetBookmarks())));
      }
    }
    loadBookmarks();
  }, [currentUser]);

  const toggleBookmark = useCallback(
    async (qId, meta = {}) => {
      const isBookmarked = bookmarks.has(qId);

      if (currentUser) {
        const ref = doc(db, "users", currentUser.uid, "bookmarks", qId);
        if (isBookmarked) {
          await deleteDoc(ref);
          setBookmarks((prev) => {
            const next = new Set(prev);
            next.delete(qId);
            return next;
          });
        } else {
          await setDoc(ref, { ...meta, savedAt: serverTimestamp() });
          setBookmarks((prev) => new Set([...prev, qId]));
        }
      } else {
        const all = lsGetBookmarks();
        if (isBookmarked) {
          delete all[qId];
          setBookmarks((prev) => {
            const next = new Set(prev);
            next.delete(qId);
            return next;
          });
        } else {
          all[qId] = { ...meta, savedAt: Date.now() };
          setBookmarks((prev) => new Set([...prev, qId]));
        }
        lsSetBookmarks(all);
      }
    },
    [currentUser, bookmarks]
  );

  return { bookmarks, toggleBookmark };
}
