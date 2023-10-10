import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBh-Nt219Zs1t5xRF8vQB8pEiV6Y8GvXJE",
  authDomain: "final-7d820.firebaseapp.com",
  projectId: "final-7d820",
  storageBucket: "final-7d820.appspot.com",
  messagingSenderId: "945857411234",
  appId: "1:945857411234:web:dff90e049cfd8ae1aa7ffb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 