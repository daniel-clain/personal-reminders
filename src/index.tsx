import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import Nav_P from './components/partials/Nav.partial';
import Quiz_V from './components/views/quiz/Quiz.view';
import viewStoreSingleton from './mobx-stores/view.store';
import QuestionManagement_V from './components/views/question-management/QuestionManagement.view';

import './../global-style.scss'
@observer
class App extends Component{
  render(){
    const {activeView} = viewStoreSingleton
    if('Start Quiz' == activeView.get())
      return [<Nav_P/>,<Quiz_V/>]
    else 
    if('Question Management' == activeView.get())
      return [<Nav_P/>, <QuestionManagement_V/>]
  }
}



const reactRenderingContainer = document.getElementById('react-rendering-div')
ReactDOM.render(<App/>, reactRenderingContainer)