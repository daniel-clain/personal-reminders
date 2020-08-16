import React, { useContext } from 'react'
import { QuizStore } from './other/mobx-stores/quiz.store'
import { PersonalQuizContext } from './other/mobx-stores/personal-quiz.store'


export function Playground({hidden} ) {

  const {updateQuestionCorrectnessRating, questions} = useContext(PersonalQuizContext).questionStore


  window['doThing'] = () => {
    const testQuestion = questions[0]
    console.log('testQuestion:>> ', testQuestion);
    updateQuestionCorrectnessRating(testQuestion, 'Correct')
    
  }
  
  return hidden ? <div></div> : <div> chimken</div>
}





