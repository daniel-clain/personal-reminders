import React from 'react'
import { observer } from 'mobx-react'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'
import quizStore  from '../../../../other/stores/quiz.store'

function CategorySelect_Sub() {  

  return <section id='quiz-question-category-select'>    
    <CategorySelector_Partial {...{
      label: 'Select quiz categories',
      categoryIds: quizStore.selectedCategoryIds,
      onValueUpdated: categoryIds => {
        quizStore.selectedCategoryIds = categoryIds
      }
    }} />
  </section>
}

export default observer(CategorySelect_Sub)
