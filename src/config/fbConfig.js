import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5cBaw2ugFQd-4YHWvWObIABEBRjAbnn4",
  authDomain: "rostering-1c860.firebaseapp.com",
  databaseURL: "https://rostering-1c860.firebaseio.com",
  projectId: "rostering-1c860",
  storageBucket: "rostering-1c860.appspot.com",
  messagingSenderId: "660692729323"
};

firebase.initializeApp(config);
firebase.firestore().settings({}
  // { timestampsInSnapshots: true }
  );

export default firebase;
