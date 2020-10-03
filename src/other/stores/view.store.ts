import { observable } from 'mobx'
import viewSet, { View_Type } from '../sets/view.set'

const viewStore = observable({
  selectedView: <View_Type> viewSet[2]
})

export default viewStore