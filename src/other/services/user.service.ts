
import Document from '../interfaces/document.interface'
import { observable} from "mobx";
import { User, auth, firestore } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import environmentService from '../services/environment.service';
import 'firebase/auth'

var provider = new auth.FacebookAuthProvider()


const userService = observable({
  user: <User> null,
  userAuthenticated: undefined,
  userDoc: <Document> null,
  showFacebookSignIn: () => 
    auth().signInWithPopup(provider)
    .catch(error => alert(error.message))
})

export default userService


if(environmentService.environment.requiresAuthentication){
  auth().onAuthStateChanged(u => {
    userService.user = u
    userService.userAuthenticated = !!u
    userService.userDoc = u ? firestore().collection('Users').doc(u.uid) : null
  })
}

