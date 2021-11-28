
import Document from '../interfaces/document.interface'
import { computed, makeAutoObservable, makeObservable, observable} from "mobx";
import { User, auth, firestore } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import environmentService from '../services/environment.service';
import 'firebase/auth'
import firebase from 'firebase/app';

export class UserService{
  user: User = null
  userDoc: Document = null


  facebookProvider

  constructor() {
    makeAutoObservable(this)

    if(environmentService.environment.requiresAuthentication){
      this.facebookProvider = new auth.FacebookAuthProvider()
      auth().onAuthStateChanged(u => {
        this.user = u
        this.userDoc = u ? firestore().collection('Users').doc(u.uid) : null
      })
    }
  }

  showFacebookSignIn = () => {
    auth().signInWithPopup(this.facebookProvider)
    .catch(error => alert(error.message))
  }
}
