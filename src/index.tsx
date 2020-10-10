import React, { HTMLAttributes, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import environmentService from './other/services/environment.service'
import setupStyles from './other/services/style.service'
import { deviceWidthService } from './other/services/device-width.service'


setupStyles()
firebase.initializeApp(environmentService.environment.firebaseConfig)


const personalQuizContainer = document.createElement('personal-quiz')
document.body.append(personalQuizContainer)

deviceWidthService.reduceBaseSizeOnSmallDeviceWidth(personalQuizContainer)

const PersonalQuiz_App = lazy(() => import('./components/personal-quiz.app'))
ReactDOM.render(
<Suspense fallback={<div>Loading...</div>}>
  <PersonalQuiz_App />
</Suspense>, personalQuizContainer)



const sheetTest = document.createElement('style')
document.head.appendChild(sheetTest)
window['color'] = {
  saturation: '100%',
  luminosity: '50%',
  hue: 0
}

//sheetTest.innerHTML = `body{background-color: hsl(0deg 100% 50%)}`
if(false){
  setInterval(() => {
    window['color'].hue += 1
    if(window['color'].hue >= 360){
      window['color'].hue = 0
    }
    const {saturation, luminosity, hue} = window['color']
    sheetTest.innerHTML = /* css */`
      body{
        background-color: hsl(${hue}deg ${saturation} ${luminosity})
      }
    `

  }, 10)
}

type StyleObject = {
  update()
}

function styleObjectBase(){

} 