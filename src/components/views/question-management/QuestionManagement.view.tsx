import React from 'react'
import ViewButtons_Sub from './question-management-components/ViewButtons.sub'
import QuestionForm_Sub from './question-management-components/QuestionForm.sub'
import QuestionList_Sub from './question-management-components/QuestionList.sub'
import { observer } from 'mobx-react'
import CategoryManagement_View from './question-management-components/category-management/CategoryManagement.view'
import { viewStore } from '../../../other/stores/view.store'


function QuestionManagement_View(){  
  
  return <main id='question-management-view'>
    <QuestionForm_Sub/>
    <hr />
    <ViewButtons_Sub />
    {
      viewStore.selectedSubView == 'Questions List' ?
        <QuestionList_Sub /> :
      viewStore.selectedSubView == 'Category Management' ?
        <CategoryManagement_View /> : null
    }
  </main>
}

export default observer(QuestionManagement_View)
