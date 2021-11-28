
import environmentService from '../other/services/environment.service';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import { UserService } from "../other/services/user.service";
import { ViewService } from '../other/services/view.service';
import { makeAutoObservable } from 'mobx';



class App{
  userService: UserService = null
  viewService: ViewService = null

  constructor(){
    this.setup()
  }

  setup(){
    makeAutoObservable(this)
    firebase.initializeApp(environmentService.environment.firebaseConfig) 
    this.userService = new UserService()
    this.viewService = new ViewService()
  }
  

} 
export const app = new App()


