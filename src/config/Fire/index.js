import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAgIFJGyIYV68YZjkC-XEeWuvblIJpNTpM',
  authDomain: 'rs-chat-3bee7.firebaseapp.com',
  databaseURL: 'https://rs-chat-3bee7-default-rtdb.firebaseio.com',
  projectId: 'rs-chat-3bee7',
  storageBucket: 'rs-chat-3bee7.appspot.com',
  messagingSenderId: '326974518829',
  appId: '1:326974518829:web:d5c9a021cc257dbb8d6aa4',
  measurementId: 'G-8YNJTZY63X',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Fire = firebase;

export default Fire;
