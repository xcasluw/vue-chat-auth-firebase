import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBXLghscMdEpUwkrzjPtdXtqcdl2S44_Jo",
    authDomain: "chat-fd782.firebaseapp.com",
    databaseURL: "https://chat-fd782.firebaseio.com",
    projectId: "chat-fd782",
    storageBucket: "chat-fd782.appspot.com",
    messagingSenderId: "1099253855985",
    appId: "1:1099253855985:web:41f72cfdd34f464a3fdb50"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projetcFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projetcFirestore, timestamp }