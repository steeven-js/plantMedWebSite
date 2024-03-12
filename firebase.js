// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEb3BqcPUG9DzAFbzEMZy8WXWU4KuGdaA",
  authDomain: "monremede-d8bfe.firebaseapp.com",
  projectId: "monremede-d8bfe",
  storageBucket: "monremede-d8bfe.appspot.com",
  messagingSenderId: "62541315106",
  appId: "1:62541315106:web:56a54d952080782e695e7b",
  measurementId: "G-B3GK5975YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app }
