import React from 'react'
import { observer } from 'mobx-react'
import quizStore  from '../../../../other/stores/quiz.store'

function StartButton_Sub() {
  return <button onClick={quizStore.startQuiz}>Start Quiz</button>
}
export default observer(StartButton_Sub)
