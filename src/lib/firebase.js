import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB07mhQJpMIf0I_4zPwWnYhwfnPJ7OwUrE",
  authDomain: "portfolio-8e8c2.firebaseapp.com",
  projectId: "portfolio-8e8c2",
  storageBucket: "portfolio-8e8c2.firebasestorage.app",
  messagingSenderId: "1080661772737",
  appId: "1:1080661772737:web:5a6263c8f7022c14cf4740",
  measurementId: "G-WTCRWDBJCE"
};

let app = null;
let auth = null;
let db = null;
let storage = null;

if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "undefined") {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  console.warn("Firebase API Key is missing. Firebase features will be disabled.");
}

export { auth, db, storage, app };
