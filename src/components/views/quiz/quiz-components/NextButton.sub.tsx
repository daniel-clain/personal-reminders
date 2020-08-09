import React, { useContext } from 'react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function NextButton_Sub() {

  const {quizStore} = useContext(PersonalQuizContext)
  const { activeQuiz, activeQuestionIndex } = quizStore.quizState
  const lastQuestion = activeQuiz.questions.length == activeQuestionIndex + 1
  return (
    <>
      <hr />
      <button onClick={() => quizStore.nextQuestion()}>{lastQuestion ? 'Finish' : 'Next'}</button>
    </>
  )
}

export default NextButton_Sub
