import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBl8W9RrVdHfGHeOUabv3YhyTtpLgsaEh8",
  authDomain: "photoshop-7452d.firebaseapp.com",
  projectId: "photoshop-7452d",
  storageBucket: "photoshop-7452d.appspot.com",
  messagingSenderId: "426997386559",
  appId: "1:426997386559:web:9b791f81887d1876a9d78a",
  measurementId: "G-SSLTY6JCHK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
