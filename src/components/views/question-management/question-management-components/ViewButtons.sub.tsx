import React, { useContext } from 'react'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

export default function ViewButtons_Sub() {
  const {viewState} = useContext(PersonalQuizContext).viewStore
  return <>
    <button
      className={selectedIfViewMatches('Questions List')}
      onClick={() => viewState.questionManagementView = 'Questions List'}>
      Questions List
    </button>
    <button
      className={selectedIfViewMatches('Category Management')}
      onClick={() => viewState.questionManagementView = 'Category Management'}>
      Category Management
    </button>
  </>
  function selectedIfViewMatches(buttonView) {
    return buttonView == viewState.questionManagementView ? 'selected' : ''
  }
}
