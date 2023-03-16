// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCpLgIF1qGw6rl-1GldkGHqxCen4upIFw",
  authDomain: "lihgt-smart.firebaseapp.com",
  databaseURL: "https://lihgt-smart-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lihgt-smart",
  storageBucket: "lihgt-smart.appspot.com",
  messagingSenderId: "548082392096",
  appId: "1:548082392096:web:cf8d55163942d808e7b045",
  measurementId: "G-GZ1YK3G994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
