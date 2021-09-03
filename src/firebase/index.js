// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

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
const auth = getAuth(app)

export { auth }
