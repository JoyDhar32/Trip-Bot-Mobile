
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPLH3dduw1Qo6CNC20mLiHtIst8A0zd7k",

    authDomain: "aitrip-7aca2.firebaseapp.com",
  
    projectId: "aitrip-7aca2",
  
    storageBucket: "aitrip-7aca2.appspot.com",
  
    messagingSenderId: "521143519907",
  
    appId: "1:521143519907:web:53cb30994bdbca3c29cd16",
  
    measurementId: "G-8XB7P45FXT"
  
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 const db = getFirestore(app);


export { app, auth, getApp, getAuth, db };

