// Import the functions you need from the SDKs you need
import { initializeApp ,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7RbqmHD8Sk1-ff7VcyCe7jPGfUlImFTM",
    authDomain: "insta-f03fb.firebaseapp.com",
    projectId: "insta-f03fb",
    storageBucket: "insta-f03fb.appspot.com",
    messagingSenderId: "1025048523646",
    appId: "1:1025048523646:web:6c2a0ce4ed93fa37a4f92f"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db= getFirestore();
const storage= getStorage();

export { app,db,storage};