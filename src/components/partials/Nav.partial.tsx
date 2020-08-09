import React, { useContext } from 'react'
import { PersonalQuizContext } from '../../other/mobx-stores/personal-quiz.store'

export default function Nav_Partial(){
  const {viewStore} = useContext(PersonalQuizContext)
  const {viewState} = viewStore

  return <nav>
    <button onClick={() => viewState.activeView = 'Quiz'}>
      Quizz</button>
    <button onClick={() => viewState.activeView = 'Question Management'}>
      Question Management</button>
  </nav>
}
