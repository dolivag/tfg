// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfwh_26RsmOxUgs6bDaOQERud_UFaUkhQ",
    authDomain: "hogarnizer.firebaseapp.com",
    projectId: "hogarnizer",
    storageBucket: "hogarnizer.appspot.com",
    messagingSenderId: "782497567382",
    appId: "1:782497567382:web:760c4250491e91daa2e8b7",
    measurementId: "G-YYVEXSE8C0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
};