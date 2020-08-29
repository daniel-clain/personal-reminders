import { observable } from 'mobx'
import { View_Type, QuestionManagementView_Type } from '../types/view.type'

const viewStore = observable({
  selectedView: <View_Type>'Question Management',
  selectedSubView: <QuestionManagementView_Type>'Category Management'
})
export default viewStore