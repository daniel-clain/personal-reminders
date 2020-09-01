import React from 'react'
import { observer } from 'mobx-react';
import Nav_Partial from './components/partials/Nav.partial'
import Quiz_View from './components/views/quiz/Quiz.view';
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view';
import viewStore from './other/stores/view.store';
import { show } from './other/services/utilities.service';
import userStore from './other/stores/user.store';
import userService from './other/services/user.service';
import environmentService from './other/services/environment.service';
import Playground_Partial from './components/partials/Playground.partial';


const {requiresAuthentication, name} = environmentService.environment

const PersonalQuiz_App = observer(() => {
  let {selectedView} = viewStore
  switch(!requiresAuthentication || userStore.userAuthenticated){
    case undefined: 
      return <>Checking authentication...</>
    case false: 
      userService.showFacebookSignIn()
      return <>Waiting for sign in with Facebook...</>
    case true: 
      return <>
        <Nav_Partial />
        {show(<Quiz_View/>).if(selectedView).is('Quiz')}
        {show(<QuestionManagement_View/>).if(selectedView).is('Question Management')}
        {show(<Playground_Partial hidden />).if(name).is('Development')}
      </>
  }
})
export default PersonalQuiz_App

