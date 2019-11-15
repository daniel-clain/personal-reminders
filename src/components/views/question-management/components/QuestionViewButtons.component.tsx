import React from 'react';
import { QuestionViews } from '../../../../types/views.type';

export const QuestionViewButtons: React.FC<
  { setQuestionView(questionView: QuestionViews): void }
> = ({setQuestionView}) => {
  return (
    <div>
      <button
        className={this.questionView == 'Questions List' ? 'selected' : ''}
        onClick={() => setQuestionView('Questions List')}>
        Questions List
      </button>

      <button
        className={this.questionView == 'Tag Management' ? 'selected' : ''}
        onClick={() => setQuestionView('Tag Management')}>
        Tag Management
      </button>
    </div>
  )
}