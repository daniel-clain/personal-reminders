import React, { useContext } from 'react'
import FormField from '../../../partials/FormField'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store';
import { observer } from 'mobx-react';
import TextField from '../../../partials/TextField';

function InputAnswer_Sub() {
  const {quizState} = useContext(PersonalQuizContext).quizStore

  return <TextField {...inputFieldProps()}/>

  function inputFieldProps(){
    return {
      label: `Enter you're answer`,
      value: quizState.inputAnswer
    }
  }
}

export default observer(InputAnswer_Sub)
