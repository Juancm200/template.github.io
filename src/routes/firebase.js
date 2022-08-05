// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD13EAsUw-upXkKL13_aWA01HacUYzj-Mo",
    authDomain: "product-template-e3477.firebaseapp.com",
    projectId: "product-template-e3477",
    storageBucket: "product-template-e3477.appspot.com",
    messagingSenderId: "476481484767",
    appId: "1:476481484767:web:7074bb1d624f717e3c766a",
    measurementId: "G-FR58HL6NQ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);