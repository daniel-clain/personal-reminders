import React from 'react'
import ReactDOM from 'react-dom'

import './../global-style.scss'
import { testFunc } from './playground'
import resizeObserver from "./other/services/resize-observer"
import { PersonalQuiz_Store_Provider } from './other/mobx-stores/personal-quiz.store';
import PersonalQuiz_App from './personal-quiz.app'

document.body.innerHTML = `<main id='personal-quiz'></main>`
const personalQuizContainer = document.getElementById('personal-quiz')


ReactDOM.render(
  <PersonalQuiz_Store_Provider>
    <PersonalQuiz_App/>
  </PersonalQuiz_Store_Provider>,
  personalQuizContainer
)

resizeObserver.observe(personalQuizContainer)
testFunc()