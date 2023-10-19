// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1WSNRmH-jmiH5Usau5uCSOpzAe7TL8v8",
  authDomain: "the-face-client.firebaseapp.com",
  projectId: "the-face-client",
  storageBucket: "the-face-client.appspot.com",
  messagingSenderId: "866570220925",
  appId: "1:866570220925:web:43ea0a60bb3dc0456d8814",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
