import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBr-cJXyraxxMqtkoVrU0rOycer8HOG7VA",
    authDomain: "sneaker-app-c890e.firebaseapp.com",
    projectId: "sneaker-app-c890e",
    storageBucket: "sneaker-app-c890e.appspot.com",
    messagingSenderId: "93147092912",
    appId: "1:93147092912:web:cc2c755bea1adc2012e875",
    measurementId: "G-TBWR41ZJ3B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };