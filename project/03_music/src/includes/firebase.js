import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCSJV9D5MRtNwZL2wk5kQRdJnIwD3nSIQY',
  authDomain: 'music-c3675.firebaseapp.com',
  projectId: 'music-c3675',
  storageBucket: 'music-c3675.appspot.com',
  messagingSenderId: '522757602556',
  appId: '1:522757602556:web:2fc61d43e28c8d06d36b79'
}

// export default is deprecated, you need improve code
// only support with npm install firebase@8
// export default firebase.initializeApp(firebaseConfig)

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
