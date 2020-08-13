import React, { useContext } from 'react'
import Nav_Partial from './components/partials/Nav.partial'
import Quiz_View from './components/views/quiz/Quiz.view';
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view';
import { PersonalQuizContext } from './other/mobx-stores/personal-quiz.store';
import { observer } from 'mobx-react'

function PersonalQuiz_App() {

  const { userInfo, viewStore } = useContext(PersonalQuizContext)
  const { activeView } = viewStore.viewState
  const goThing = () => console.log('hooray')
  return userInfo.isAuthenticated ? <>
    <Nav_Partial />
    
    <Quiz_View isActive={activeView == 'Quiz'} />
    <QuestionManagement_View isActive={activeView == 'Question Management'} />
    
  </> : <p>Sign in with Facebook to use Personal Quiz</p>
}
export default observer(PersonalQuiz_App)