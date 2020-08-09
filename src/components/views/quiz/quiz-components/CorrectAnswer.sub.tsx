import React, { useContext } from 'react'
import FormField from '../../../partials/FormField'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function CorrectAnswer_Sub() {
  
  const {quizStore} = useContext(PersonalQuizContext)
  const { activeQuiz, activeQuestionIndex } = quizStore.quizState
  const { correctAnswer } = activeQuiz.questions[activeQuestionIndex]
  return (
    <FormField
      name='correct answer'
      type='textarea'
      value={correctAnswer}
      readOnly={true}
    />
  )
}


export default CorrectAnswer_Sub
