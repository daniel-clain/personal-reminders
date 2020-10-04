import { observer } from 'mobx-react';
import React from 'react'
import { userStore, viewStore, quizStore } from '../../other/stores';
import questionsService from '../../other/services/questions.service'
import categoriesService from '../../other/services/categories.service'


export default observer(({hidden} ) => {
  console.log('%c welcome to the playground', 'color: #b8d7ff')
  const stores = {userStore, viewStore, quizStore}
  const services = {questionsService, categoriesService}
  console.log(`%c stores are on the window object (window.stores)`, 'color: #dba2ff')
  window['stores']=stores
  window['services']=services
  return (
    <div style={{display: hidden ? 'none' : 'block'}}>
      chimken
      
    </div>
  )
})






