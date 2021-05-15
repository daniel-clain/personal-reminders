import React from 'react'
import {selectedView, setView} from '../../other/services/view.service'
import views from '../../other/sets/view.set'

export default () =>
<view-selectors>
  {views.map(view => 
    <view-selector 
      class='button'
      {...selectedView.value == view ? 
        {selected: ''} : {notselected: ''}
      }
      onClick={() => setView(view)}
      key={view}
    >
      {view}
    </view-selector >
  )}    
</view-selectors>

