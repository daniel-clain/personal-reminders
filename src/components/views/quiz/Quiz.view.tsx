import React, { Component } from 'react';
import { QuestionStore } from '../../../mobx-stores/question.store';
import { TagStore } from '../../../mobx-stores/tag.store';
import { observer } from 'mobx-react';

@observer
export default class Quiz extends Component<{
  questionStore: QuestionStore; 
  tagStore: TagStore;
}>{
  render(){
    return <div>Quiz</div>
  }
}
