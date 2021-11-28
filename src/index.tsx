import React from 'react'
import {render} from 'react-dom'
import setupStyles from './other/services/style.service'
import {PersonalQuiz_App} from './components/personal-quiz.app';
setupStyles()

const personalQuizContainer = document.createElement('personal-quiz')
document.body.append(personalQuizContainer)

render(<PersonalQuiz_App/>, personalQuizContainer)
