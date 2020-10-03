import React from 'react'
import viewStore from '../../other/stores/view.store'
import views from '../../other/sets/view.set'

export default () =>
<view-selectors>
  {views.map(view => 
    <view-selector 
      {...viewStore.selectedView == view ? {isActive: ''} : {}}
      onClick={() => viewStore.selectedView = view}
      key={view}
    >
      {view}
    </view-selector >
  )}    
</view-selectors>

