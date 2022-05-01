// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt6ncLGOKBufGgxD5v3NzZxfM-t6PqmdM",
  authDomain: "warehouse-management-c2a0a.firebaseapp.com",
  projectId: "warehouse-management-c2a0a",
  storageBucket: "warehouse-management-c2a0a.appspot.com",
  messagingSenderId: "233165991525",
  appId: "1:233165991525:web:1151be9d06a11faf27a08c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;