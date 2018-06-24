import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyC_mmwF4Kofqdh9qc8Zzof3oL09h1U2V1U",
  authDomain: "vue-firebase-employeemanager.firebaseapp.com",
  databaseURL: "https://vue-firebase-employeemanager.firebaseio.com",
  projectId: "vue-firebase-employeemanager",
  storageBucket: "vue-firebase-employeemanager.appspot.com",
  messagingSenderId: "624273698502"
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()