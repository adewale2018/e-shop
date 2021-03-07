import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyAMTHBTrcbtC5xKRSCUsYYsKXzZIWI1mCs",
  authDomain: "okans-store.firebaseapp.com",
  databaseURL: "https://okans-store.firebaseio.com",
  projectId: "okans-store",
  storageBucket: "okans-store.appspot.com",
  messagingSenderId: "648136013787",
  appId: "1:648136013787:web:888c206848f928348899fe",
  measurementId: "G-4ENKJ6GFL7",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
