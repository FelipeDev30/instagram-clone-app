// Import the functions you need from the SDKs you need

import firebase  from "firebase";

const firebaseApp = firebase.initializeApp({    
  apiKey: "AIzaSyBY7arWdHusyxvTDBma38FjkRThMX5AywY",
  authDomain: "insta-clone-react-fireba-cda32.firebaseapp.com",
  projectId: "insta-clone-react-fireba-cda32",
  storageBucket: "insta-clone-react-fireba-cda32.firebasestorage.app",
  messagingSenderId: "76025184344",
  appId: "1:76025184344:web:8e4604c0c080cbf97f8a2d",
  measurementId: "G-XBE3XJ5L33"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const functions = firebaseApp.functions();
export { db, auth, storage, functions };