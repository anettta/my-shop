import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBl8W9RrVdHfGHeOUabv3YhyTtpLgsaEh8",
  authDomain: "photoshop-7452d.firebaseapp.com",
  projectId: "photoshop-7452d",
  storageBucket: "photoshop-7452d.appspot.com",
  messagingSenderId: "426997386559",
  appId: "1:426997386559:web:9b791f81887d1876a9d78a",
  measurementId: "G-SSLTY6JCHK",
};

initializeApp(config);

// Initialize Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Firestore
export const firestore = getFirestore();

// Auth
export const auth = getAuth();

// Sign in with Google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).catch((error) => {
    // Handle errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used
    const email = error.email;
    // The AuthCredential type that was used
    const credential = GoogleAuthProvider.credentialFromError(error);
    // Do whatever to handle error
    console.log({
      errorCode,
      errorMessage,
      email,
      credential,
    });
  });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Now calls the `doc` function; reference to Firestore database is
  // passed as first argument
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  // Now calls the `getDoc` function; DocumentReference is now passed as the argument
  const userSnapshot = await getDoc(userRef);

  // `.exists` is now a function on the snapshot, not a property
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Now calls `setDoc` function; DocumentReference passed as first argument
      // and data to set is second argument
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
