import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

const firebaseConfig = {
    databaseURL: "https://.firebaseio.com",
    apiKey: "",
    authDomain: ".firebaseapp.com",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: "",
    appId: "1:495997402923:web:",
    measurementId: "G-"
}

firebase.initializeApp(firebaseConfig)

export default firebase;