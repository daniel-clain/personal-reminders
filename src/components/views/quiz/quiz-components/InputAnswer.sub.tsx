import React from 'react'
import { observer } from 'mobx-react';
import TextField from '../../../partials/TextField.partial';
import quizStore from '../../../../other/stores/quiz.store';

export default observer(() => {
  console.log('input answer rerender');
  return <TextField {...{
    label: `Enter you're answer`,
    value: quizStore.inputAnswer,
    onValueUpdated: answer => quizStore.inputAnswer = answer
  }} />
})
