import Document from '../interfaces/document.interface'
import { observable} from "mobx";
import { User, auth, firestore } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import environmentService from '../services/environment.service';

const userStore = observable({
  user: <User> null,
  userAuthenticated: undefined,
  userDoc: <Document> null
})

export default userStore


if(environmentService.environment.requiresAuthentication){
  auth().onAuthStateChanged(u => {
    userStore.user = u
    userStore.userAuthenticated = !!u
    userStore.userDoc = u ? firestore().collection('Users').doc(u.uid) : null
  })
}