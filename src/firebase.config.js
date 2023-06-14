// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5GGleqhCHAk50-4Ejd1gNNaOeoNT16Lk",
  authDomain: "house-marketplace-app-31860.firebaseapp.com",
  projectId: "house-marketplace-app-31860",
  storageBucket: "house-marketplace-app-31860.appspot.com",
  messagingSenderId: "410747818833",
  appId: "1:410747818833:web:1d193f4af2c67b40fff970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();