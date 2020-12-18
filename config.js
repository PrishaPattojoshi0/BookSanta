import firebase from 'firebase'; 
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg4T15yNY5COhWl8R0rR6acLaSHg3AzGs",
    authDomain: "booksanta-14387.firebaseapp.com",
    projectId: "booksanta-14387",
    storageBucket: "booksanta-14387.appspot.com",
    messagingSenderId: "449866036837",
    appId: "1:449866036837:web:5cdbd0ff7b6f048c83388c",
    measurementId: "G-NHCFZJMF6T"
  };

  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore();