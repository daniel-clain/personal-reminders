import {observable, IObservableValue} from 'mobx';
import { View_Type, QuestionManagementView_Type } from '../types/view.type';

interface ViewState_Interface{
  activeView: View_Type,
  questionManagementView: QuestionManagementView_Type
}

function ViewStore(){
  
  const viewState: ViewState_Interface = observable({
    activeView: 'Question Management',
    questionManagementView: 'Tag Management'
  })

  return {
    viewState
  }
  
}
const viewStoreSingleton = ViewStore()
export default viewStoreSingleton