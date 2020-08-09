

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig } from './firebase.config';


firebase.initializeApp(firebaseConfig)

const firebaseAuth = firebase.auth()
const firestore = firebase.firestore()


export {firestore, firebaseAuth}