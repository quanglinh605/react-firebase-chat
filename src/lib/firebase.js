// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6c3ee.firebaseapp.com",
  projectId: "reactchat-6c3ee",
  storageBucket: "reactchat-6c3ee.appspot.com",
  messagingSenderId: "90433545741",
  appId: "1:90433545741:web:d6ba7b1a59081e63e29744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
