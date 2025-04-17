// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_S0qU9TwluZgVXMtAJYSwf2xEVe1q18Q",
  authDomain: "educonnect-6867b.firebaseapp.com",
  projectId: "educonnect-6867b",
  storageBucket: "educonnect-6867b.firebasestorage.app",
  messagingSenderId: "1000966431255",
  appId: "1:1000966431255:web:9c466831ec66ae045a7252",
  measurementId: "G-VE61FXX9LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };