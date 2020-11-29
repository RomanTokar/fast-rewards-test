import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
  apiKey: 'AIzaSyBs0m2EqjTYIS97lmPC_CCj1Iz811qcXqA',
  authDomain: 'test-63668.firebaseapp.com',
  databaseURL: 'https://test-63668.firebaseio.com',
  projectId: 'test-63668',
  storageBucket: 'test-63668.appspot.com',
  messagingSenderId: '403711038601',
  appId: '1:403711038601:web:5c74b16c00731685336258'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const database = firebase.database()