import React, { useContext } from 'react'
import FormField from '../../../partials/FormField'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store';
import { observer } from 'mobx-react';

function InputAnswer_Sub() {
  const {quizState} = useContext(PersonalQuizContext).quizStore
  function handleOnChange(value){
    quizState.inputAnswer = value
  }

  return (
  <FormField
    name='your answer'
    type='textarea'
    value={quizState.inputAnswer}
    objKey={null}
    onUpdate={handleOnChange}
  />
  )
}

export default observer(InputAnswer_Sub)
