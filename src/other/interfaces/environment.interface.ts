import { Environments_Set } from "../sets/environments.set";

export default interface Environment_Interface{
  name: Environments_Set
  requiresAuthentication: boolean  
  firebaseConfig: {    
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
  }
}