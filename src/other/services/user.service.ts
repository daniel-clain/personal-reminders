import { auth } from 'firebase/app'
import 'firebase/auth'

var provider = new auth.FacebookAuthProvider()

export default {
  showFacebookSignIn: () => 
    auth().signInWithPopup(provider)
}
