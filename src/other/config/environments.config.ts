import Environment_Interface from "../interfaces/environment.interface";
import { firebaseConfig } from "./firebase.config";

export const development: Environment_Interface = {
  name: 'Development',
  firebaseConfig: firebaseConfig,
  requiresAuthentication: true
}
export const production: Environment_Interface = {
  name: 'Production',
  firebaseConfig: firebaseConfig,
  requiresAuthentication: true
}
