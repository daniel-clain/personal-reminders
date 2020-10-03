import React, { HTMLAttributes, useEffect } from 'react'
import { hot } from 'react-hot-loader/root';
import Quiz_View from './components/views/quiz/Quiz.view';
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view';

import viewStore from './other/stores/view.store';
import { show } from './other/services/utilities.service';
import userStore from './other/stores/user.store';
import userService from './other/services/user.service';
import environmentService from './other/services/environment.service';
import Playground_Partial from './components/partials/Playground.partial';
import { observer } from 'mobx-react';
import ViewSelectors_Partial from './components/partials/ViewSelectors_Partial';

import CategoryManagement_View from './components/views/category-management/CategoryManagement_View';


const { environment } = environmentService

const PersonalQuiz_App = observer(() => {

  let { selectedView } = viewStore
  switch (environment.requiresAuthentication == false || userStore.userAuthenticated) {
    case undefined:
      return <>Checking authentication...</>
    case false:
      userService.showFacebookSignIn()
      return <>Waiting for sign in with Facebook...</>
    case true:
      return <>
        <ViewSelectors_Partial/>

        {show(<Quiz_View />).if(selectedView == 'Quiz')}
        {show(<QuestionManagement_View />).if(selectedView == 'Questions')}
        {show(<CategoryManagement_View />).if(selectedView == 'Categories')}

        {show(<Playground_Partial hidden />).if(environment.name == 'Development')}
      </>
  }
})
export default hot(PersonalQuiz_App)




