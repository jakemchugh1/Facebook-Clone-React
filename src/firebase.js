import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe0b8mS3Bik05im6YBECnQj822mVqn6Uo",
    authDomain: "facebook-clone-906ba.firebaseapp.com",
    projectId: "facebook-clone-906ba",
    storageBucket: "facebook-clone-906ba.appspot.com",
    messagingSenderId: "1062438604043",
    appId: "1:1062438604043:web:3faf6c6e569025800a660e",
    measurementId: "G-YPRW2LVGZB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;