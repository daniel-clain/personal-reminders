import React, { useContext } from 'react'
import ViewProps_Interface from '../../../other/interfaces/view-props.interface'
import ViewButtons_Sub from './question-management-components/ViewButtons.sub'
import QuestionForm_Sub from './question-management-components/QuestionForm.sub'
import QuestionList_Sub from './question-management-components/QuestionList.sub'
import { observer } from 'mobx-react'
import CategoryManagement_View from './question-management-components/category-management/CategoryManagement.view'
import { PersonalQuizContext } from '../../../other/mobx-stores/personal-quiz.store'


function QuestionManagement_View({isActive}: ViewProps_Interface){
  
  if(isActive == false) return null

  const {viewStore} = useContext(PersonalQuizContext)
  const {questionManagementView} = viewStore.viewState
  
  return <main id='question-management-view'>
    <QuestionForm_Sub/>
    <hr />
    <ViewButtons_Sub />

    {questionManagementView == 'Questions List' && 
      <QuestionList_Sub />
    }

    {questionManagementView === 'Category Management' &&
      <CategoryManagement_View />
    }
  </main>
}

export default observer(QuestionManagement_View)
