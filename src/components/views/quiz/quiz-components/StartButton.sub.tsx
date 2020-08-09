import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function StartButton_Sub() {
  const {quizStore} = useContext(PersonalQuizContext)
  return <button onClick={quizStore.startQuiz}>Start Quiz</button>
}
export default observer(StartButton_Sub)
