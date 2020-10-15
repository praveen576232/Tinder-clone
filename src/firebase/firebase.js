import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDW3TJN_HgHQBTMVT3HIOfprw27_C3geWI",
    authDomain: "notification-1ddb8.firebaseapp.com",
    databaseURL: "https://notification-1ddb8.firebaseio.com",
    projectId: "notification-1ddb8",
    storageBucket: "notification-1ddb8.appspot.com",
    messagingSenderId: "741474953578",
    appId: "1:741474953578:web:acb912f8f989153e7b1d13"
  };
const myapp = firebase.initializeApp(firebaseConfig);
const auth = myapp.auth();
const db = myapp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export {auth, provider};