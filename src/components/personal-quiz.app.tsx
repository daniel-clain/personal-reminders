import React from 'react'
import { observer } from 'mobx-react';

import Quiz_View from './views/quiz/Quiz.view';
import QuestionManagement_View from './views/question-management/QuestionManagement.view';

import ViewSelectors_Partial from './partials/ViewSelectors_Partial';
import CategoryManagement_View from './views/category-management/CategoryManagement_View';
import { WaitingToLogin_View } from './views/waiting-to-login/WaitingToLogin.view';
import { app } from './app';

const {userService, viewService} = app

export const PersonalQuiz_App = observer(() => {
  const {activeView} = viewService

  return (
    <div className='personal-quiz'>
      {!userService.user ? 
        <WaitingToLogin_View/> : ''
      }
      {userService.user ? 
        <>
          <ViewSelectors_Partial/>
          {activeView == 'Quiz' ? <Quiz_View /> : ''}
          {activeView == 'Questions' ? <QuestionManagement_View/> : ''}
          {activeView == 'Categories' ? <CategoryManagement_View/>  : ''}
        </> : ''
      }
    </div>
  )
})






/* 
export const PersonalQuiz_App = hot(observer(({firebaseReturn}: any) => {

  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    onFontLoaded(() => setFontLoaded(true))
  })
  useEffect(() => {
    console.log('firebaseReturn :>> ', firebaseReturn);
  }, [firebaseReturn])
 */

/* 
  return firebaseReturn ? <div>'yay'</div> : <div>'nay'</div>

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
})) */





