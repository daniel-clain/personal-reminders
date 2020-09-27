import React, { HTMLAttributes, lazy, Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom'
//import './../global-style.scss'
//import './styles/new-global-style.sass'
import './other/services/custom-tags.service'
import resizeObserver from "./other/services/resize-observer"
import firebase from 'firebase/app'
import environmentService from './other/services/environment.service'
import * as allStyles from './other/javascript-styles'


const sheet = document.createElement('style')
sheet.innerHTML = Object.values(allStyles).join('')
document.head.appendChild(sheet)

const {environment} = environmentService

firebase.initializeApp(environment.firebaseConfig)

document.body.innerHTML = `<personal-quiz></personal-quiz>`
const personalQuizContainer = document.querySelector('personal-quiz')
resizeObserver.observe(personalQuizContainer)

const PersonalQuiz_App = lazy(() => import('./personal-quiz.app'))



ReactDOM.render(
<Suspense fallback={<div>Loading...</div>}>
  <PersonalQuiz_App />
</Suspense>, personalQuizContainer)



