import firebase from 'firebase/app'
require('firebase/database')

const config = {
  apiKey: "AIzaSyDzkhXUMWTBUKZrMBakTi7CyMgIb0TlFhQ",
  authDomain: "turnout-d2f2e.firebaseapp.com",
  databaseURL: "https://turnout-d2f2e.firebaseio.com",
  projectId: "turnout-d2f2e",
  storageBucket: "turnout-d2f2e.appspot.com",
  messagingSenderId: "874547002825"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
