// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail,
    GoogleAuthProvider, // Class ایکسپورٹ کریں
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    collection, 
    query, 
    where, 
    getDocs, 
    orderBy, 
    limit, 
    onSnapshot, 
    addDoc, 
    increment, 
    arrayUnion 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD3DCiKSeFMpUAmz_iiuhnH-N3SgV-pIXU",
    authDomain: "nesports7.firebaseapp.com",
    projectId: "nesports7",
    storageBucket: "nesports7.firebasestorage.app",
    messagingSenderId: "414629589331",
    appId: "1:414629589331:web:2a30069688008d17d371a6",
    measurementId: "G-ELZMHDM7NM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // Instance بنائیں

export { 
    app, auth, db, googleProvider, GoogleAuthProvider,
    onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, signInWithPopup,
    doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, orderBy, limit, onSnapshot, addDoc, increment, arrayUnion 
};
