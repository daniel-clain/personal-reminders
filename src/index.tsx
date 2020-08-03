import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav.component';
import QuestionManagement from './components/views/question-management/QuestionManagement.view';
import Quiz from './components/views/quiz/Quiz.view';

import {observer} from 'mobx-react';
import viewStoreSingleton from './mobx-stores/view.store';
import questionStoreSingleton from './mobx-stores/question.store';
import tagStoreSingleton from './mobx-stores/tag.store';

import './../global-style.scss'

@observer
class App extends Component{
  render(){    
    const {activeView} = viewStoreSingleton
    return <>test
      <Nav viewStore={viewStoreSingleton}/>
      {
        activeView === 'Start Quiz' &&
        <Quiz
          questionStore={questionStoreSingleton}
          tagStore={tagStoreSingleton}
        />
      }
      {
        activeView === 'Question Management' &&
        <QuestionManagement
          questionStore={questionStoreSingleton}
          tagStore={tagStoreSingleton}
        />
      }
    </>
  }
}


const reactRenderingContainer = document.getElementById('react-rendering-div')
ReactDOM.render(<App/>, reactRenderingContainer)