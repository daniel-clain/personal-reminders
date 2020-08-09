import React, { useContext } from 'react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function SubmitButton_Sub() {
  const {quizStore} = useContext(PersonalQuizContext)
  const {submitQuestion} = quizStore
  return <button onClick={submitQuestion}>Submit</button>
}

export default SubmitButton_Sub
