import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import TextField from '../../../partials/TextField'
import quizStore  from '../../../../other/stores/quiz.store'

function Question_Sub() {

  const {activeQuestionIndex, activeQuiz} = quizStore
  const {value} = activeQuiz.questions[activeQuestionIndex]

  return <TextField {...questionFieldProps()}/>
  
  function questionFieldProps(){
    return {
      label: `Question ${activeQuestionIndex + 1}`,
      value,
      readonly: true
    }
  }
}

export default observer(Question_Sub)
