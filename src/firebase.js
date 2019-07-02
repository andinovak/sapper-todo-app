import * as firebase from "firebase";
import { firebaseConfig } from "./firebase-config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };

// Initialize db
export const db = firebase.firestore();

// Initialize
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
