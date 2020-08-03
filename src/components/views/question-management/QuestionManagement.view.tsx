import React, { useState } from 'react';
import QuestionForm from './question-management-components/QuestionForm.component';
import QuestionsList from './question-management-components/QuestionsList.component';

import { QuestionManagementView } from '../../../types/view.type';
import TagManagement from './question-management-components/tag-management/TagManagement.component';
import QuestionManagementViewButtons from './question-management-components/QuestionManagementViewButtons.component';

export default function QuestionManagement_V(){
  
  const [questionManagementView, setQuestionManagementView] = 
  useState<QuestionManagementView>('Questions List');
  
  return <>
    <QuestionForm/>
    <hr />
    <QuestionManagementViewButtons {...{
      setQuestionManagementView, questionManagementView
    }}/>

    <QuestionsList />

    {questionManagementView === 'Tag Management' &&
    <TagManagement />}
  </>
}
