import React from 'react'
import { Question_Sub, InputAnswer_Sub, CorrectAnswer_Sub, CorrectnessButtons_Sub, SubmitButton_Sub, StartButton_Sub } from "../components/views/quiz/quiz-components"
import CategorySelectSub from '../components/views/quiz/quiz-components/CategorySelect.sub'

type Quiz_SubComponents = {
  ['category selecter']: JSX.Element,
  ['start quiz button']: JSX.Element,
  ['question text field']: JSX.Element,
  ['answer input text field']: JSX.Element,
  ['submit answer button']: JSX.Element,
  ['correct answer']: JSX.Element,
  ['correctness rating buttons']: JSX.Element,
  test: string
}

type Components = {
  ['quiz']: Quiz_SubComponents

}


export const components: Components = {
  ['quiz']: {
    ['category selecter']: <CategorySelectSub/>,
    ['start quiz button']: <StartButton_Sub/>,
    ['question text field']:  <Question_Sub/>,
    ['answer input text field']: <InputAnswer_Sub/>,
    ['submit answer button']: <SubmitButton_Sub/>,
    ['correct answer']: <CorrectAnswer_Sub/>,
    ['correctness rating buttons']: <CorrectnessButtons_Sub/>,
    test: 'cactus'
  },
  
}
