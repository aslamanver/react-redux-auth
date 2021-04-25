import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

const firebaseConfig = {
    databaseURL: "https://g.firebaseio.com",
    apiKey: "g",
    authDomain: "g.firebaseapp.com",
    projectId: "g",
    storageBucket: "g.appspot.com",
    messagingSenderId: "",
    appId: "1:495997402923:web:",
    measurementId: "G-"
}

firebase.initializeApp(firebaseConfig)

export default firebase;