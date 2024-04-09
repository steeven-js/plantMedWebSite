// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbrwKO93LNYiiS0UTbgauWm9RTi1sVL6M",
  authDomain: "plantmedapp.firebaseapp.com",
  projectId: "plantmedapp",
  storageBucket: "plantmedapp.appspot.com",
  messagingSenderId: "485456459649",
  appId: "1:485456459649:web:d16c2f9690c620c31eda80",
  measurementId: "G-DS9XFQ9J6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, app, auth, storage }
