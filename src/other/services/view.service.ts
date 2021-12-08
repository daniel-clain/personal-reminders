import { observable, makeAutoObservable } from 'mobx'
import viewSet, { View_Type } from '../sets/view.set'
import WebFont from 'webfontloader'


export class ViewService{
  activeView: View_Type = 'Priority Reminder'
  fontLoaded = false

  constructor(){ 
    makeAutoObservable(this)

    WebFont.load({
      google: {families: ['Nunito Sans', 'Sriracha']},
      active: () => this.fontLoaded = true,
    });
  }  
}
