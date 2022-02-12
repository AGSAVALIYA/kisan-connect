import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCuRdtgcHiqSzn_FAakUw_iF31ElMxPhEE",
    authDomain: "kisan-connect-1bd03.firebaseapp.com",
    projectId: "kisan-connect-1bd03",
    storageBucket: "kisan-connect-1bd03.appspot.com",
    messagingSenderId: "258729515195",
    appId: "1:258729515195:web:f126d0d590e0463ff4f19e"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};