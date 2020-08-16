

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseConfig, firebaseDemoConfig } from './firebase.config';

if(!!'Use demo' == true)
  firebase.initializeApp(firebaseDemoConfig)
else
  firebase.initializeApp(firebaseConfig)

const firebaseAuth = firebase.auth()
const firestore = firebase.firestore()


export {firestore, firebaseAuth}