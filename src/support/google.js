import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC2bI5K8El2cRgK8TOPjNosfMMHVtULnYc",
    authDomain: "loginwith-42258.firebaseapp.com",
    databaseURL: "https://loginwith-42258.firebaseio.com",
    projectId: "loginwith-42258",
    storageBucket: "",
    messagingSenderId: "147781513555"
  };

  firebase.initializeApp(config)
  export const ref = firebase.database().ref();
  export const provider = new firebase.auth.GoogleAuthProvider();