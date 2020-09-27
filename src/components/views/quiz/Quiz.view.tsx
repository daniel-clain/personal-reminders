import React from 'react'
import { observer } from 'mobx-react'
import { SubmitButton_Sub, CategorySelect_Sub, StartButton_Sub, Question_Sub, InputAnswer_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub, NextButton_Sub } from './quiz-components'
import quizStore  from '../../../other/stores/quiz.store'

function Quiz_View() {

  return (
    <div className='view view--quiz'>
      {quizStore.quizInProgress == false ? <>
        <CategorySelect_Sub />
        <StartButton_Sub />
      </> : null}

      {quizStore.quizInProgress == true ? <>
        <Question_Sub />
        <InputAnswer_Sub />
        {
          quizStore.answerSubmitted == false ?
            <SubmitButton_Sub />: 
          quizStore.answerSubmitted == true ? <>
            <CorrectAnswer_Sub />
            <CorrectnessButtons_Sub />
            {quizStore.answerSubmitted == true ?
              <NextButton_Sub /> : null 
            }
          </> : null
        }
      </> : null}
    </div>
  )
}

export default observer(Quiz_View)
