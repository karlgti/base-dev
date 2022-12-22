// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu3IC8qYolAOq7J7klXWfBBrZCIIyBk8M",
  authDomain: "base-3aa6e.firebaseapp.com",
  databaseURL:
    "https://base-3aa6e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "base-3aa6e",
  storageBucket: "base-3aa6e.appspot.com",
  messagingSenderId: "887255052575",
  appId: "1:887255052575:web:6cd16d8eb9949dcdec402a",
  measurementId: "G-LR39HEHN0E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
