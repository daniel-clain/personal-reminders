import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'
import TextField from '../../../partials/TextField'

function Question_Sub() {

  const {quizStore} = useContext(PersonalQuizContext)
  const {activeQuestionIndex, activeQuiz} = quizStore.quizState
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
