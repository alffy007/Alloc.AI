// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQwCxJwXq4zctOu5S7s8UqXVODnKsVlWw",
  authDomain: "alloc-ai-15f3e.firebaseapp.com",
  projectId: "alloc-ai-15f3e",
  storageBucket: "alloc-ai-15f3e.appspot.com",
  messagingSenderId: "169287646236",
  appId: "1:169287646236:web:01c72fb4bd3cbd3b92b3d9",
  measurementId: "G-XDVYB919BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

