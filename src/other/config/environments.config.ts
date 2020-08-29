import Environment_Interface from "../interfaces/environment.interface";
import { firebaseDemoConfig, firebaseConfig } from "./firebase.config";

export const development: Environment_Interface = {
  name: 'Development',
  firebaseConfig: firebaseDemoConfig,
  requiresAuthentication: false
}
export const production: Environment_Interface = {
  name: 'Production',
  firebaseConfig: firebaseConfig,
  requiresAuthentication: true
}