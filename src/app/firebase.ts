// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGNTev2RxaER6RqpkQCl4F0ZfHr-9tFSw",
  authDomain: "projektifinal-ecdb2.firebaseapp.com",
  projectId: "projektifinal-ecdb2",
  storageBucket: "projektifinal-ecdb2.appspot.com",
  messagingSenderId: "516185810145",
  appId: "1:516185810145:web:b3024edad2675e193ec3a0",
  measurementId: "G-XYNQBCQ50Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);