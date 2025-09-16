// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Gg0nFMzguFTl6yLHNDFgEvku_SIM4dM",
  authDomain: "movies-gpt-ed6b8.firebaseapp.com",
  projectId: "movies-gpt-ed6b8",
  storageBucket: "movies-gpt-ed6b8.firebasestorage.app",
  messagingSenderId: "482825817707",
  appId: "1:482825817707:web:4749b0c2ca9aada29a6b2e",
  measurementId: "G-454BL3XPR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);