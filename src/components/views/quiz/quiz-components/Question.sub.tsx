import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import FormField from '../../../partials/FormField'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function Question_Sub() {

  const {quizStore} = useContext(PersonalQuizContext)
  const {activeQuestionIndex, activeQuiz} = quizStore.quizState
  const {value} = activeQuiz.questions[activeQuestionIndex]

  return (
    <FormField 
      name='question'
      objKey='value' 
      type='input'
      readOnly={true}
      value={value}
      />
  )
}

export default observer(Question_Sub)
