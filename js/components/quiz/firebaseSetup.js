import Firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAbfIGRIMnH7lgTI0GPQ1XHIM6oHbWgx3g',
  authDomain: 'quiz-6da7b.firebaseapp.com',
  databaseURL: 'https://quiz-6da7b.firebaseio.com',
  storageBucket: 'quiz-6da7b.appspot.com',
  messagingSenderId: '1023930397126'
}

export const firebaseApp = Firebase.initializeApp(config)
export const firebaseDB = firebaseApp.database()
export const firebaseAuth = firebaseApp.auth()
