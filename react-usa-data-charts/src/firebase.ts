// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKL2hycnOqGfNOxotcJ3Eh3NUJ4EIpTaQ",
  authDomain: "react-usa-data-charts.firebaseapp.com",
  projectId: "react-usa-data-charts",
  storageBucket: "react-usa-data-charts.appspot.com",
  messagingSenderId: "987329263180",
  appId: "1:987329263180:web:1d30aa7427de9d26b0e6e9",
  measurementId: "G-SNQF6S9MVG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth: Auth = getAuth(app);
const db = getFirestore(app);

// Initialize Firebase
export const initializeFirebase = () => {
  return { app, analytics };
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
