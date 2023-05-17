// import firebase from 'firebase/compat/app'
import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import 'firebase/firestore'
// import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBNhSiDtDUg6Y5q_-iSzxMNFmV2vKpqeY8",
    authDomain: "cloudnotebook-96e11.firebaseapp.com",
    projectId: "cloudnotebook-96e11",
    storageBucket: "cloudnotebook-96e11.appspot.com",
    messagingSenderId: "609687874442",
    appId: "1:609687874442:web:6a2498d6b57b2973527673"
  };
export const app=initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(); 