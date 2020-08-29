import React from 'react'
import { viewStore } from '../../other/stores/view.store'

export default function Nav_Partial(){

  return <nav>
    <button onClick={() => viewStore.selectedView = 'Quiz'}>
      Quizz</button>
    <button onClick={() => viewStore.selectedView = 'Question Management'}>
      Question Management</button>
  </nav>
}
