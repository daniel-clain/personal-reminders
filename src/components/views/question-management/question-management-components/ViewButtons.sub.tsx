import React from 'react';
import viewStore from '../../../../other/mobx-stores/view.store';

export default function ViewButtons_Sub() {
  const {viewState} = viewStore
  return <>
    <button
      className={selectedIfViewMatches('Questions List')}
      onClick={() => viewState.questionManagementView = 'Questions List'}>
      Questions List
    </button>
    <button
      className={selectedIfViewMatches('Tag Management')}
      onClick={() => viewState.questionManagementView = 'Tag Management'}>
      Tag Management
    </button>
  </>
  function selectedIfViewMatches(buttonView) {
    return buttonView == viewState.questionManagementView ? 'selected' : ''
  }
}
