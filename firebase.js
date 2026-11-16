import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwJfXhTRExcbwKH0sZ9Afz7zRjvSXRuZg",
  authDomain: "login-page-8540.firebaseapp.com",
  projectId: "login-page-8540",
  storageBucket: "login-page-8540.firebasestorage.app",
  messagingSenderId: "741217889172",
  appId: "1:741217889172:web:485a599fa6290dacc93d81",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);