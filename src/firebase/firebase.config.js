// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5trSREdPqE7N8CvssGLNBNDF44twbz8U",
  authDomain: "react-dragon-news-auth-a2167.firebaseapp.com",
  projectId: "react-dragon-news-auth-a2167",
  storageBucket: "react-dragon-news-auth-a2167.appspot.com",
  messagingSenderId: "866374544323",
  appId: "1:866374544323:web:a207f370dd6b011914eb76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;