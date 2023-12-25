// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1j9VmTP__bntzkuOEhc9C_-Q-4a-amkg",
  authDomain: "groceriesapp-e1ac5.firebaseapp.com",
  projectId: "groceriesapp-e1ac5",
  storageBucket: "groceriesapp-e1ac5.appspot.com",
  messagingSenderId: "473017197650",
  appId: "1:473017197650:web:d98b4ecc79a0b35fe52b8b",
  measurementId: "G-1L1MXWYYTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();
const athentication=getAuth(app);

export {athentication, database}