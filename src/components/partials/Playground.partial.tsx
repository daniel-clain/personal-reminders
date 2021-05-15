import { observer } from 'mobx-react';
import React from 'react'
import questionsService from '../../other/services/questions.service'
import categoriesService from '../../other/services/categories.service'
import quizService from '../../other/services/quiz.service'
import * as viewService from '../../other/services/view.service'
import userService from '../../other/services/user.service'
import dataService from '../../other/services/data.service'


export default observer(({hidden} ) => {
  console.log('%c welcome to the playground', 'color: #b8d7ff')
  const services = {questionsService, categoriesService, quizService, viewService, userService, dataService}
  console.log(`%c services are on the window object (window.services)`, 'color: #dba2ff')
  window['services']=services

  return (
    <div style={{display: hidden ? 'none' : 'block'}}>
      chimken
      
    </div>
  )
})






