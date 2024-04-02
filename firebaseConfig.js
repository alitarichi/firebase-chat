// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpmY-NCbMjUgmJ2Ec2bVF9zZ5fBUOtvck",
  authDomain: "fir-chat-795bf.firebaseapp.com",
  projectId: "fir-chat-795bf",
  storageBucket: "fir-chat-795bf.appspot.com",
  messagingSenderId: "42743131823",
  appId: "1:42743131823:web:11c2e13180eaa064d72e5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
