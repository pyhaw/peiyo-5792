import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbWXtHi2TBBhlMfdXdeAI1amVQhNwoix8",
  authDomain: "orbital-18ab3.firebaseapp.com",
  projectId: "orbital-18ab3",
  storageBucket: "orbital-18ab3.appspot.com",
  messagingSenderId: "867046933003",
  appId: "1:867046933003:web:09375211823ff2de557d0e",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
