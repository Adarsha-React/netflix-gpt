// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzDrjOhEzO5JAZ6_IljJelbGKzqMkvRPc",
  authDomain: "netflixgptonline.firebaseapp.com",
  projectId: "netflixgptonline",
  storageBucket: "netflixgptonline.appspot.com",
  messagingSenderId: "431755451353",
  appId: "1:431755451353:web:084c71699272b5480e97c8",
  measurementId: "G-NVTBQLTFQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
