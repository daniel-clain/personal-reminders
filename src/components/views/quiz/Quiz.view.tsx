import React from 'react'
import { observer } from 'mobx-react'
import { show } from '../../../other/services/utilities.service'
import QuizSetupForm_Sub from './quiz-components/QuizSetupForm_Sub'
import QuizQuestionForm_Sub from './quiz-components/QuizQuestionForm_Sub'
import quizService from '../../../other/services/quiz.service'

function Quiz_View() {

  return (
    <quiz-view>
      {show(
        <QuizSetupForm_Sub/>
      ).if(quizService.quizInProgress == false)}

      {show(
        <QuizQuestionForm_Sub/>
      ).if(quizService.quizInProgress == true)}
    </quiz-view>
  )
}

export default observer(Quiz_View)
