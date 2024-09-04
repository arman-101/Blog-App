import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKgNEwWLbwY_5giya2ebcJogh8E2q7ONQ",
  authDomain: "blog-app-5419c.firebaseapp.com",
  projectId: "blog-app-5419c",
  storageBucket: "blog-app-5419c.appspot.com",
  messagingSenderId: "825802496134",
  appId: "1:825802496134:web:eafa2321c111ec703b5907",
  measurementId: "G-B9BEQY5MS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);