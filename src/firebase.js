// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-x9ks0i9-fI_L4gKC7dX0QRDokZUAceM",
  authDomain: "bloom-n-blend.firebaseapp.com",
  projectId: "bloom-n-blend",
  storageBucket: "bloom-n-blend.firebasestorage.app",
  messagingSenderId: "945408411417",
  appId: "1:945408411417:web:817b03ba8ea975e207e788",
  measurementId: "G-1NNC8P0EN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
