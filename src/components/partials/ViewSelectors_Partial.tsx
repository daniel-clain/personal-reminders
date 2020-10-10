import React from 'react'
import viewStore from '../../other/services/view.service'
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

