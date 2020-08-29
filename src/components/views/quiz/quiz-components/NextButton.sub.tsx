import React from 'react'
import quizStore  from '../../../../other/stores/quiz.store'

function NextButton_Sub() {

  const { activeQuiz, activeQuestionIndex } = quizStore
  const lastQuestion = activeQuiz.questions.length == activeQuestionIndex + 1
  return (
    <>
      <hr />
      <button onClick={() => quizStore.nextQuestion()}>{lastQuestion ? 'Finish' : 'Next'}</button>
    </>
  )
}

export default NextButton_Sub
