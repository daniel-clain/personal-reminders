import React from 'react';
import { QuestionManagementView } from '../../../../types/view.type';

export default function QuestionManagementViewButtons
  (
    { setQuestionManagementView, questionManagementView }: 
    { setQuestionManagementView: (questionManagementView: QuestionManagementView) => void, questionManagementView: QuestionManagementView}
  ) {
  return <>
    <button
      className={selectedIfViewMatches('Questions List')}
      onClick={() => setQuestionManagementView('Questions List')}>
      Questions List
    </button>
    <button
      className={selectedIfViewMatches('Tag Management')}
      onClick={() => setQuestionManagementView('Tag Management')}>
      Tag Management
    </button>
  </>
  function selectedIfViewMatches(buttonView) {
    return buttonView == questionManagementView && 'selected'
  }
}
