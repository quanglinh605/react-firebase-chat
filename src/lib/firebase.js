import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6c3ee.firebaseapp.com",
  projectId: "reactchat-6c3ee",
  storageBucket: "reactchat-6c3ee.appspot.com",
  messagingSenderId: "90433545741",
  appId: "1:90433545741:web:d6ba7b1a59081e63e29744"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
