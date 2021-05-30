// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDtWOXFM-uR34waOAF8OkaHfVTazkqn9GA",
    authDomain: "clone-55f48.firebaseapp.com",
    projectId: "clone-55f48",
    storageBucket: "clone-55f48.appspot.com",
    messagingSenderId: "338413734169",
    appId: "1:338413734169:web:8c8feaedae140b2fa0dd88",
    measurementId: "G-EVVNHYYHBB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};