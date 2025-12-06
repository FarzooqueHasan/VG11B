import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApGO2h18Zd7XP329gp76oAyd5iY5Ca0tw",
    authDomain: "vg-11b.firebaseapp.com",
    projectId: "vg-11b",
    storageBucket: "vg-11b.firebasestorage.app",
    messagingSenderId: "399637941786",
    appId: "1:399637941786:web:6fb28a7ed3c76b28accba3",
    measurementId: "G-752MVDJT49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
