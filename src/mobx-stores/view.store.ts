import {observable, IObservableValue} from 'mobx';
import { View } from '../types/view.type';

function ViewStore(){
  const activeView: IObservableValue<View> = observable.box('Start Quiz')
  activeView.set('Question Management')

  return {
    activeView    
  }
  
}

const viewStoreSingleton = ViewStore()
export default viewStoreSingleton