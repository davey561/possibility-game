// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcR7FoFNIvPLOiMY65wYixQvjnRPSqVL8",
    authDomain: "possibility-game.firebaseapp.com",
    projectId: "possibility-game",
    storageBucket: "possibility-game.firebasestorage.app",
    messagingSenderId: "180098654290",
    appId: "1:180098654290:web:4792fb7519add773c7ff8b",
    measurementId: "G-RX3QK4PVG4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
