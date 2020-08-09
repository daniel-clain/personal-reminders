import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function CategorySelect_Sub() {
  
  const {quizStore} = useContext(PersonalQuizContext)
  const {quizState, categorySelected} = quizStore
  const selectedCategoryIds = quizState.selectedCategories.map(c => c.id)

  return <section id='quiz-question-category-select'>    
    <CategorySelector_Partial {...{selectedCategoryIds, categorySelected}} />
  </section>
}

export default observer(CategorySelect_Sub)
