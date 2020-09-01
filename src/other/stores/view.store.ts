import { observable } from 'mobx'
import { View_Set, SubView_Set } from '../sets/view.set'

const viewStore = observable({
  selectedView: <View_Set>'Question Management',
  selectedSubView: <SubView_Set>'Category Management'
})
export default viewStore