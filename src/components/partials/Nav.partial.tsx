import React from 'react';
import viewStoreSingleton from '../../mobx-stores/view.store';

export default function Nav_P(){
  return <>
    <button onClick={() => viewStoreSingleton.activeView.set('Start Quiz')}>Start Quizz</button>
    <button onClick={() => viewStoreSingleton.activeView.set('Question Management')}>Question Management</button>
  </>
}
