import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import ViewProps_Interface from '../../../other/interfaces/view-props.interface'

import { SubmitButton_Sub, CategorySelect_Sub, StartButton_Sub, Question_Sub, InputAnswer_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub, NextButton_Sub } from './quiz-components'
import { PersonalQuizContext } from '../../../other/mobx-stores/personal-quiz.store'

function Quiz_View({ isActive }: ViewProps_Interface) {
  
  const {quizStore} = useContext(PersonalQuizContext)
  if (isActive == false) return null

  const { quizInProgress, answerSubmitted, correctnessMarkSubmitted } = quizStore.quizState

  return <main id='quiz-view'>
    {quizInProgress == false && <>
      <CategorySelect_Sub />
      <StartButton_Sub />
    </>}

    {quizInProgress == true && <>
      <Question_Sub />
      <InputAnswer_Sub />
      {answerSubmitted == false &&
        <SubmitButton_Sub />
      }

      {answerSubmitted == true && <>
        <CorrectAnswer_Sub />
        <CorrectnessButtons_Sub />

        {correctnessMarkSubmitted == true &&
          <NextButton_Sub />
        }
      </>}
    </>}
  </main>
}

export default observer(Quiz_View)
