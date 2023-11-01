// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { CONFIG } from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: CONFIG.FIREBASE_API_KEY,
  authDomain: CONFIG.FIREBASE_AUTH_DOMAIN,
  projectId: CONFIG.FIREBASE_PROJECTID,
  storageBucket: CONFIG.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: CONFIG.FIREBASE_MESSAGINGSENDERID,
  appId: CONFIG.FIREBASE_APP_ID,
  measurementId: CONFIG.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
