import React from 'react'
import ReactDOM from 'react-dom'

import './../global-style.scss'
import resizeObserver from "./other/services/resize-observer"
import { PersonalQuiz_Store_Provider } from './other/mobx-stores/personal-quiz.store';
import PersonalQuiz_App from './personal-quiz.app'
import { Playground } from './playground';

console.log(`the env is: {-- ${process.env}  --}.`)

document.body.innerHTML = `<main id='personal-quiz'></main>`
const personalQuizContainer = document.getElementById('personal-quiz')


ReactDOM.render(
  <PersonalQuiz_Store_Provider>
    <PersonalQuiz_App/>
    <Playground hidden/>
  </PersonalQuiz_Store_Provider>,
  personalQuizContainer
)

resizeObserver.observe(personalQuizContainer)
