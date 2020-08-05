import React, { useState } from 'react';

import QuestionForm from './question-management-components/Form.sub';
import QuestionsList from './question-management-components/List.sub';
import TagManagement from './question-management-components/tag-management/TagManagement.component';
import QuestionManagementViewButtons from './question-management-components/ViewButtons.sub';
import ViewProps_Interface from '../../../other/interfaces/view-props.interface';
import ViewButtons_Sub from './question-management-components/ViewButtons.sub';
import viewStore from '../../../other/mobx-stores/view.store';
import Form_Sub from './question-management-components/Form.sub';
import List_Sub from './question-management-components/List.sub';


export default function QuestionManagement_View({isActive}: ViewProps_Interface){
  
  if(isActive == false) return null

  const {questionManagementView} = viewStore.viewState
  
  return <main id='question-management-view'>
    <Form_Sub/>
    <hr />
    <ViewButtons_Sub />

    {questionManagementView == 'Questions List' && 
      <List_Sub />
    }

    {questionManagementView === 'Tag Management' &&
      <TagManagement />
    }
  </main>
}
