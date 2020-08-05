import React from 'react';
import viewStore from '../../other/mobx-stores/view.store';

export default function Nav_P(){

  const {viewState} = viewStore

  return <nav>
    <button onClick={() => viewState.activeView = 'Quiz'}>
      Start Quizz</button>
    <button onClick={() => viewState.activeView = 'Question Management'}>
      Question Management</button>
  </nav>
}
