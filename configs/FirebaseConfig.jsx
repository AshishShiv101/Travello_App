import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; // Only needed for web

const firebaseConfig = {
    apiKey: "AIzaSyBXfdBwAV6863U7SOAZi6pj_s7cg_NT3UA",
    authDomain: "travello-ec4d4.firebaseapp.com",
    projectId: "travello-ec4d4",
    storageBucket: "travello-ec4d4.appspot.com",  // Corrected
    messagingSenderId: "893786693132",
    appId: "1:893786693132:web:59e74cf159e627302fd829",
    measurementId: "G-SG8Z965PFF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
