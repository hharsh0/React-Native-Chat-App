import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXKnC-wSu6UiSg5ALF7Aw2-jRNhjYPwKk",
  authDomain: "chatapp-pbl-project.firebaseapp.com",
  projectId: "chatapp-pbl-project",
  storageBucket: "chatapp-pbl-project.appspot.com",
  messagingSenderId: "944284516523",
  appId: "1:944284516523:web:6c7f41edbcaade09d7b7ee",
  measurementId: "G-WERJ70SVCH",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
