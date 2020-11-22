import React from 'react'
import viewStore from '../../other/services/view.service'
import views from '../../other/sets/view.set'

export default () =>
<view-selectors>
  {views.map(view => 
    <view-selector 
      class='button'
      {...viewStore.selectedView == view ? {selected: ''} : viewStore.selectedView ? {notselected: ''} : ''}
      onClick={() => viewStore.selectedView = view}
      key={view}
    >
      {view}
    </view-selector >
  )}    
</view-selectors>

