import React from 'react'
import { observer } from 'mobx-react'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'
import quizStore  from '../../../../other/stores/quiz.store'

function CategorySelect_Sub() {  
  const {categorySelected, selectedCategories} = quizStore
  const selectedCategoryIds = selectedCategories.map(c => c.id)

  return <section id='quiz-question-category-select'>    
    <CategorySelector_Partial {...{selectedCategoryIds, categorySelected}} />
  </section>
}

export default observer(CategorySelect_Sub)
