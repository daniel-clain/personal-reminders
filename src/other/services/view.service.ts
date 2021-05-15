import { action, observable } from 'mobx'
import viewSet, { View_Type } from '../sets/view.set'
import WebFont from 'webfontloader'

export const selectedView = observable({
  value: <View_Type> localStorage.getItem('last selected view') || viewSet[0]
})
export const setView = action((view: View_Type) => {
  selectedView.value = view
  localStorage.setItem('last selected view', view)
})

export const onFontLoaded = func => {
  WebFont.load({
    google: {families: ['Nunito Sans', 'Sriracha']},
    active: func,
  });
}


