// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXr2G3ZVqi4ZEVeHdxd_4SPBpe6s-QFA0",
  authDomain: "movie-vibes-95b3f.firebaseapp.com",
  projectId: "movie-vibes-95b3f",
  storageBucket: "movie-vibes-95b3f.appspot.com",
  messagingSenderId: "957365774925",
  appId: "1:957365774925:web:31e55e262cae6b98b8ca04",
  measurementId: "G-SCEQ1GKXY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
