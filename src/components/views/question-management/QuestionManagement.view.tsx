import React, { Component } from 'react';
import { QuestionStore } from '../../../mobx-stores/question.store';
import { TagStore } from '../../../mobx-stores/tag.store';
import QuestionForm from './components/QuestionForm.component';
import QuestionsList from './components/QuestionsList.component';
import { QuestionViewButtons } from './components/QuestionViewButtons.component';
import { QuestionViews } from '../../../types/views.type';
import TagManagement from './components/tag-management/TagManagement.component';

export default class QuestionManagement extends Component<{
  questionStore: QuestionStore;
  tagStore: TagStore;
}, {questionView: QuestionViews}>{
  
  constructor(props){
    super(props)
    this.state = {
      questionView: 'Questions List'
    }
  }
  setQuestionView(questionView: QuestionViews){
    this.setState({questionView: questionView})
    console.log('this.state.questionView :', this.state.questionView);
  }
  render() {
    const { questionStore, tagStore } = this.props
    const { questionView } = this.state
    return (
      <div>
        <QuestionForm questionStore={questionStore} tagStore={tagStore} />
        <hr />
        <QuestionViewButtons setQuestionView={this.setQuestionView.bind(this)}/>
        {questionView === 'Questions List' &&
        <QuestionsList questionStore={questionStore} tagStore={tagStore} />}
        {questionView === 'Tag Management' &&
        <TagManagement tagStore={tagStore} />}
      </div>
    )
  }
}
