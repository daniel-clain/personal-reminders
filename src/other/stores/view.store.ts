import { observable } from 'mobx'
import { View_Type } from '../sets/view.set'

const viewStore = observable({
  selectedView: <View_Type>'Question Management'
})

export default viewStore