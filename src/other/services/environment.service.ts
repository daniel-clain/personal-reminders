import { Environments_Set } from "../sets/environments.set";
import Environment_Interface from "../interfaces/environment.interface";
import { development, production, demo } from "../config/environments.config";
import { observable } from "mobx";

var environmentService =  observable({
  environment: <Environment_Interface> null,  
})

export default environmentService

export const setEnvironment = (env: Environments_Set) => {
  if(env == 'Development') environmentService.environment = development
  if(env == 'Demo') environmentService.environment = demo
  if(env == 'Production') environmentService.environment = production
}