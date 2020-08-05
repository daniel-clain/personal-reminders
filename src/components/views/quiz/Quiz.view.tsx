import React from 'react';
import { observer } from 'mobx-react';
import ViewProps_Interface from '../../../other/interfaces/view-props.interface';
import quizStore from './../../../other/mobx-stores/quiz.store'

import { SubmitButton_Sub, CategorySelect_Sub, StartButton_Sub, Question_Sub, InputAnswer_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub, NextButton_Sub } from './quiz-components';

function Quiz_View({ isActive }: ViewProps_Interface) {
  if (isActive == false) return null

  const { quizInProgress, answerSubmitted, correctnessRecorded } = quizStore.quizState

  return <main id='quiz-view'>
    {quizInProgress == false && <>
      <CategorySelect_Sub />
      <StartButton_Sub />
    </>}

    {quizInProgress == true && <>
      <Question_Sub />
      <InputAnswer_Sub />
      <SubmitButton_Sub />

      {answerSubmitted == true && <>
        <CorrectAnswer_Sub />
        <CorrectnessButtons_Sub />

        {correctnessRecorded == true &&
          <NextButton_Sub />
        }
      </>}
    </>}
  </main>
}

export default observer(Quiz_View)
