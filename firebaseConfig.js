// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3OvN6niRVmkewzxfIMvU4Bm5jkUnDlpE",
  authDomain: "bizcon-a5112.firebaseapp.com",
  projectId: "bizcon-a5112",
  storageBucket: "bizcon-a5112.appspot.com",
  messagingSenderId: "910029189996",
  appId: "1:910029189996:web:f62a8c52352b26db57f949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

// Android : 560622160114-gdsd0pv8bma1f9mdpacfj8koghqadvit.apps.googleusercontent.com