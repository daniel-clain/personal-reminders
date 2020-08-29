import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './../global-style.scss'
import resizeObserver from "./other/services/resize-observer"
import firebase from 'firebase/app'
import environmentService from './other/services/environment.service'

firebase.initializeApp(environmentService.environment.firebaseConfig)

document.body.innerHTML = `<main id='personal-quiz'></main>`
const personalQuizContainer = document.getElementById('personal-quiz')

const PersonalQuiz_App = lazy(() => import('./personal-quiz.app'))

ReactDOM.render(
<Suspense fallback={<div>Loading...</div>}>
  <PersonalQuiz_App />
</Suspense>, personalQuizContainer)

resizeObserver.observe(personalQuizContainer)
