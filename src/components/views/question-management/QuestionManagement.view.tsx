import React from 'react'
import ViewButtons_Sub from './question-management-components/ViewButtons.sub'
import QuestionForm_Sub from './question-management-components/QuestionForm.sub'
import QuestionList_Sub from './question-management-components/QuestionList.sub'
import { observer } from 'mobx-react'
import CategoryManagement_View from './question-management-components/category-management/CategoryManagement.view'
import viewStore from '../../../other/stores/view.store'
import { show } from '../../../other/services/utilities.service'

function QuestionManagement_View(){  
  const {selectedSubView} = viewStore  
  return <main id='question-management-view'>
    <QuestionForm_Sub/>
    <hr />
    <ViewButtons_Sub />
    {show(<QuestionList_Sub />).if(selectedSubView).is('Questions List')}
    {show(<CategoryManagement_View />).if(selectedSubView).is('Category Management')}
  </main>
}

export default observer(QuestionManagement_View)
