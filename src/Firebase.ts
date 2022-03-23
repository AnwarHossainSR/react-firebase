import { initializeApp } from "firebase/app";
// import {
//   FacebookAuthProvider,
//   getAuth,
//   GoogleAuthProvider,
// } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_SORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const provierGoogle = new GoogleAuthProvider();
// export const provierFacebook = new FacebookAuthProvider();

// export const auth = getAuth();
