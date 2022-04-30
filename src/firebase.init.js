import {getAuth} from 'react';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_API_apiKey,
  authDomain:process.env.REACT_API_authDomain,
  projectId:process.env.REACT_API_projectId,
  storageBucket:process.env.REACT_API_storageBucket,
  messagingSenderId:process.env.REACT_API_messagingSenderId,
  appId:process.env.REACT_API_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;