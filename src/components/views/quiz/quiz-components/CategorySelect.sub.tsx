import React from 'react'
import tagStore from '../../../../other/mobx-stores/tag.store'
import quizStore from '../../../../other/mobx-stores/quiz.store'
import { observer } from 'mobx-react'
import TagSelector_Partial from '../../../partials/TagSelector.partial'

function CategorySelect_Sub() {
  const {selectedTags, tagSelected} = quizStore

  return <section id='quiz-question-category-select'>    
    <TagSelector_Partial {...{selectedTags, tagSelected}} />
  </section>
}

export default observer(CategorySelect_Sub)
