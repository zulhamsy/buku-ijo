// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyB2DHPgZLNM51Nc4AGh4wTKxiyBKqRuqGI',
  authDomain: 'buku-ijo.firebaseapp.com',
  projectId: 'buku-ijo',
  storageBucket: 'buku-ijo.appspot.com',
  messagingSenderId: '516191709300',
  appId: '1:516191709300:web:db58ce5d0c28394fe60921',
  measurementId: 'G-WPVPBS1KS3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Auth
const auth = getAuth(app)
// Firestore
const db = getFirestore(app)
const suratDB = collection(db, 'surat')
const usersDB = collection(db, 'users')
const sp2DB = collection(db, 'sp2')

export { auth, suratDB, usersDB, sp2DB, db }
