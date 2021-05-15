import React, { HTMLAttributes, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root';
import Quiz_View from './views/quiz/Quiz.view';
import QuestionManagement_View from './views/question-management/QuestionManagement.view';

import {onFontLoaded, selectedView} from '../other/services/view.service';
import { show } from '../other/services/utilities.service';
import userService from '../other/services/user.service';
import environmentService from '../other/services/environment.service';
import Playground_Partial from './partials/Playground.partial';
import { observer } from 'mobx-react';
import ViewSelectors_Partial from './partials/ViewSelectors_Partial';

import CategoryManagement_View from './views/category-management/CategoryManagement_View';


const { environment } = environmentService

const PersonalQuiz_App = observer(() => {

  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    onFontLoaded(() => setFontLoaded(true))
  })

  if(!fontLoaded) return

  switch (environment.requiresAuthentication == false || userService.userAuthenticated) {
    case undefined:
      return <>Checking authentication...</>
    case false:
      return <facebook-login>
        Waiting for sign in with Facebook...
        <button className='Facebook-Login' onClick={userService.showFacebookSignIn}>
          Login with Facebook
        </button>
      </facebook-login>
    case true:
      return <>
        <ViewSelectors_Partial/>

        {show(<Quiz_View />).if(selectedView.value == 'Quiz')}
        {show(<QuestionManagement_View />).if(selectedView.value == 'Questions')}
        {show(<CategoryManagement_View />).if(selectedView.value == 'Categories')}

        {show(<Playground_Partial hidden />).if(environment.name == 'Development')}
      </>
  }
})
export default hot(PersonalQuiz_App)




