// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDrd34G9s0xFTPlx3nrKmVCqANn8cTOZi4",
  authDomain: "geanologywebapp.firebaseapp.com",
  projectId: "geanologywebapp",
  storageBucket: "geanologywebapp.appspot.com",
  messagingSenderId: "813846598750",
  appId: "1:813846598750:web:b260c079e28d86093750cf",
  measurementId: "G-XM3BZZ1KQT"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)