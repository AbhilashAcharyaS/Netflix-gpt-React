// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHPZ2ltvfbeJ0QW6CTs9hIUOQnRnNxi7A",
  authDomain: "netflixgpt-178ee.firebaseapp.com",
  projectId: "netflixgpt-178ee",
  storageBucket: "netflixgpt-178ee.appspot.com",
  messagingSenderId: "1066499321202",
  appId: "1:1066499321202:web:9b107c6a27ad09f8b581eb",
  measurementId: "G-3DHFQ65BKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();