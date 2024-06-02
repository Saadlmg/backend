
const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyCPfAp_nOdsLNyLcyqOtQ1MSwevOz2qRac",
    authDomain: "location-228f2.firebaseapp.com",
    projectId: "location-228f2",
    storageBucket: "location-228f2.appspot.com",
    messagingSenderId: "562110652009",
    appId: "1:562110652009:web:c269afac86814e876a4cf8",
    measurementId: "G-YVGF3D1JTG"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

module.exports = { auth, provider, firebase };
  