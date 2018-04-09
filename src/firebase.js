const firebase = require("firebase")
const config = {
  apiKey: "AIzaSyAhrVyRkLROA4DOT6oeZFtGwvzcdz8F7EM",
  authDomain: "nth-cumulus-197904.firebaseapp.com",
  databaseURL: "https://nth-cumulus-197904.firebaseio.com",
  projectId: "nth-cumulus-197904",
  storageBucket: "nth-cumulus-197904.appspot.com",
  messagingSenderId: "362841129103"
};

const fireApp = firebase.initializeApp(config)
const db = fireApp.database()

export default db;