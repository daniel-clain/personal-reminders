import React from 'react'
import quizStore  from '../../../../other/stores/quiz.store'

function SubmitButton_Sub() {
  return <button onClick={quizStore.submitQuestion}>Submit</button>
}

export default SubmitButton_Sub
