import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

// NOTE: Enable Google + Email/Password in Firebase Console:
// https://console.firebase.google.com → fmge-d0ab3 → Authentication → Sign-in method
const firebaseConfig = {
  apiKey: "AIzaSyBIRMpjhxQzYiwOk4kLP1_uy-KM3-hHIXU",
  authDomain: "fmge-d0ab3.firebaseapp.com",
  projectId: "fmge-d0ab3",
  storageBucket: "fmge-d0ab3.firebasestorage.app",
  messagingSenderId: "81821458984",
  appId: "1:81821458984:web:adadc58a1f9eeb39e5cb1d",
  measurementId: "G-E3SDY01GBC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
};
