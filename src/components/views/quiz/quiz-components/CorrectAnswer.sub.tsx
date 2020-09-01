import React from 'react'
import TextField from '../../../partials/TextField.partial'
import quizStore  from '../../../../other/stores/quiz.store'

function CorrectAnswer_Sub() {
  
  const { activeQuiz, activeQuestionIndex } = quizStore
  const { correctAnswer } = activeQuiz.questions[activeQuestionIndex]
  
  return <TextField {...answerFieldProps()}/>

  function answerFieldProps(){
    return {
      label: 'The correct answer is',
      value: correctAnswer,
      readonly: true
    }
  }
}


export default CorrectAnswer_Sub
