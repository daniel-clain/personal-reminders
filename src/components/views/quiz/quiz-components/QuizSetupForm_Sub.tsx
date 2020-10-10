import { observer } from 'mobx-react'
import React from 'react'
import quizService from '../../../../other/services/quiz.service'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'

export default observer(() => {
  const label = 'Select quiz categories'
  return (
    <quiz-setup>
      <form-field name={label}>
        <CategorySelector_Partial {...{
          label,
          value: quizService.selectedCategoryIds,
          onChange: categoryIds => {
            quizService.selectedCategoryIds = categoryIds
          }
        }} />
      </form-field>
      <button className='start' onClick={quizService.startQuiz}>Start Quiz</button>
    </quiz-setup>
  )
})
