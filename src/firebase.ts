// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkNtfOnSwpbbzsMEUyzwjW7vqBHr3EpDQ",
  authDomain: "notes-app-82e8c.firebaseapp.com",
  projectId: "notes-app-82e8c",
  storageBucket: "notes-app-82e8c.appspot.com",
  messagingSenderId: "763836382647",
  appId: "1:763836382647:web:3eca04f44ec6ed3ef63c32"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app);  

