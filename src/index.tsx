import React from 'react'
import ReactDOM from 'react-dom'
import './../global-style.scss'
import resizeObserver from "./other/services/resize-observer"
import firebase from 'firebase/app'

import PersonalQuiz_App from './personal-quiz.app'
import userService from './other/services/user.service'
import environmentService from './other/services/environment.service'
import userStore from './other/stores/user.store'
import { observer } from 'mobx-react'

const {environment} = environmentService

console.log(`Personal Quiz App environment: ${environment.name}`);
const fb = firebase.initializeApp(environment.firebaseConfig)
userStore.setupFirebaseUser()


document.body.innerHTML = `<main id='personal-quiz'></main>`
const personalQuizContainer = document.getElementById('personal-quiz')
resizeObserver.observe(personalQuizContainer)


const AppRoot = observer(() => {
  switch(userStore.userAuthenticated){
    case undefined: 
      return <>Checking authentication...</>
    case false: 
      userService.showFacebookSignIn()
      return <>Waiting for sign in with Facebook...</>
    case true: 
      return <PersonalQuiz_App/>
  }
})

ReactDOM.render(<AppRoot/>, personalQuizContainer)
