import {observable, IObservableValue} from 'mobx'
import { View_Type, QuestionManagementView_Type } from '../types/view.type'

interface ViewState_Interface{
  activeView: View_Type,
  questionManagementView: QuestionManagementView_Type
}

export function ViewStore(){
  
  const viewState: ViewState_Interface = observable({
    activeView: 'Question Management',
    questionManagementView: 'Category Management'
  })

  return {
    viewState
  }  
}