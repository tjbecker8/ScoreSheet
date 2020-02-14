import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB5CeWOzV5cnAGrA_oOUP9xQz0uFhW8cMc",
    authDomain: "scoresheet-44239.firebaseapp.com",
    databaseURL: "https://scoresheet-44239.firebaseio.com",
    projectId: "scoresheet-44239",
    storageBucket: "scoresheet-44239.appspot.com",
    messagingSenderId: "492423275704",
    appId: "1:492423275704:web:daf66242aeb32ea6c1804d",
    measurementId: "G-KVFRNF7XP6"

var fire = firebase.initializeApp(config);

export default fire;
