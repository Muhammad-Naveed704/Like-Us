import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYTfVZVUClyYk7pSEDpq2R_oc6uHt7DPQ",
  authDomain: "alpha-chat-7e3da.firebaseapp.com",
  projectId: "alpha-chat-7e3da",
  storageBucket: "alpha-chat-7e3da.appspot.com",
  messagingSenderId: "715921803252",
  appId: "1:715921803252:web:35731fce493816f8e99ba1",
  measurementId: "G-9NJYPPXXZY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getAuth,
  createUserWithEmailAndPassword,
  query,
  where,
  getDocs,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
 
};
