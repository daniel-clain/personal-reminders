import React from 'react'
import views from '../../other/sets/view.set'
import { app } from '../app'

export default () =>
<view-selectors>
  {views.map(view => 
    <view-selector 
      class='button'
      {...app.viewService.activeView == view ? 
        {selected: ''} : {notselected: ''}
      }
      onClick={() => app.viewService.activeView = view}
      key={view}
    >
      {view}
    </view-selector >
  )}    
</view-selectors>

