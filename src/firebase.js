
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Firebase configuration (use your own config from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBBzVFlF-NguDyfuzxZ9mRigooW2mLRiME",
  authDomain: "e-commerce-7514a.firebaseapp.com",
  projectId: "e-commerce-7514a",
  storageBucket: "e-commerce-7514a.firebasestorage.app",
  messagingSenderId: "853033464653",
  appId: "1:853033464653:web:ba057195bee355a6347d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances of Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);  // This initializes Firestore

// Export Firebase services
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, doc, setDoc, getDoc };

