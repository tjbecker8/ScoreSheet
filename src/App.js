import React from 'react';
import firebase from 'firebase';
import "firebase/firestore"

import './App.css';

import LeagueLanding from './components/LeagueLanding/leagueLanding'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
})

export const database = firebase.firestore();
export const FirebaseDatabase = firebase.database();

function App() {




  return (
    
      <LeagueLanding />
  );
}

export default App;
