import {observable, autorun} from 'mobx';
import { Views } from '../types/views.type';
export class ViewStore{
  @observable activeView: Views = 'Start Quiz'

  constructor(){
    this.setActiveView('Question Management')
  }

  setActiveView(view: Views){
    this.activeView = view
  }
}
const viewStoreSingleton = new ViewStore()

export default viewStoreSingleton