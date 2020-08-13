import React, { useContext } from 'react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'
import TextField from '../../../partials/TextField'

function CorrectAnswer_Sub() {
  
  const {quizStore} = useContext(PersonalQuizContext)
  const { activeQuiz, activeQuestionIndex } = quizStore.quizState
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
