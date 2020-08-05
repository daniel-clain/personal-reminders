import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Nav_P from './components/partials/Nav.partial';
import Quiz_View from './components/views/quiz/Quiz.view';
import QuestionManagement_View from './components/views/question-management/QuestionManagement.view';
import viewStore from './other/mobx-stores/view.store'

import './../global-style.scss'
@observer
class App extends Component{
  render(){
    const {activeView} = viewStore.viewState
    return <>
      <Nav_P/>
      <Quiz_View isActive={activeView == 'Quiz'}/>
      <QuestionManagement_View isActive={activeView == 'Question Management'}/>
    </>
  }
}



/* const reactRenderingContainer = document.getElementById('react-rendering-div') */
document.body.innerHTML = '<Personal-Quiz></Personal-Quiz>'
const reactRenderingContainer = document.getElementsByTagName('Personal-Quiz')[0]

ReactDOM.render(<App/>, reactRenderingContainer)