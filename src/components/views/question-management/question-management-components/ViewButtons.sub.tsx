import React from 'react'
import viewStore from '../../../../other/stores/view.store'

export default function ViewButtons_Sub() {
  return <>
    <button
      className={selectedIfViewMatches('Questions List')}
      onClick={() => viewStore.selectedSubView = 'Questions List'}>
      Questions List
    </button>
    <button
      className={selectedIfViewMatches('Category Management')}
      onClick={() => viewStore.selectedSubView = 'Category Management'}>
      Category Management
    </button>
  </>
  function selectedIfViewMatches(buttonView) {
    return buttonView == viewStore.selectedSubView ? 'selected' : ''
  }
}
