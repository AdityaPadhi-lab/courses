// firebase.ts

// Import required Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Correct Firebase configuration for web
const firebaseConfig = {
  apiKey: "AIzaSyCJyQXLB35wa-M387SYieS-lEYjEItpALU",
  authDomain: "courses-1a007.firebaseapp.com",
  projectId: "courses-1a007",
  storageBucket: "courses-1a007.appspot.com", // ✅ fixed typo: was firebasestorage.app
  messagingSenderId: "756253601076",
  appId: "1:756253601076:web:9a76ae8093fd32a1f30961" // ✅ changed android to web
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
