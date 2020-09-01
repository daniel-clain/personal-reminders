import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
//import './../global-style.scss'
import './styles/new-global-style.sass'

import resizeObserver from "./other/services/resize-observer"
import firebase from 'firebase/app'
import environmentService from './other/services/environment.service'

const {environment} = environmentService

firebase.initializeApp(environment.firebaseConfig)

document.body.innerHTML = `<personal-quiz></personal-quiz>`
const personalQuizContainer = document.getElementsByTagName('personal-quiz')[0]

const PersonalQuiz_App = lazy(() => import('./personal-quiz.app'))

ReactDOM.render(
<Suspense fallback={<div>Loading...</div>}>
  <PersonalQuiz_App />
</Suspense>, personalQuizContainer)

resizeObserver.observe(personalQuizContainer)
