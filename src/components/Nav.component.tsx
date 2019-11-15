import React, { Component } from 'react';
import { ViewStore } from '../mobx-stores/view.store';

export default class Nav extends Component<{ viewStore: ViewStore; }>{
  render(){
    const {viewStore} = this.props
    return <>
      <button onClick={() => viewStore.setActiveView('Start Quiz')}>Start Quizz</button>
      <button onClick={() => viewStore.setActiveView('Question Management')}>Question Management</button>
    </>
  }
}
