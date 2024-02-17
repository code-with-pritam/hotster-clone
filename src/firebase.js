import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBP3MvQfG0agi4NlblQmgzoC528NlzfOGg",
    authDomain: "disneyplus-clone-326d9.firebaseapp.com",
    projectId: "disneyplus-clone-326d9",
    storageBucket: "disneyplus-clone-326d9.appspot.com",
    messagingSenderId: "932291276654",
    appId: "1:932291276654:web:fd682d55d63d956ee65b7f",
    measurementId: "G-WW5X3BN806"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;