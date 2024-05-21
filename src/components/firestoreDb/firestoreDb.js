
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'


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

// connecting to db 
const db = getFirestore()

// conecting to collection of db 

const colRef = collection(db, 'families')

// getting collection data 
getDocs(colRef)
    .then((snapshot) => {
        let families = []
        snapshot.docs.forEach((doc)=>{
            families.push({...doc.data(), id: doc.id})
        })
        console.log(families)
    }).catch(err => {
        console.log(err.message)
    })
