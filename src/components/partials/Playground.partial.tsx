import { observer } from 'mobx-react';
import React from 'react'
import { userStore, viewStore, quizStore } from '../../other/stores';

export default observer(({hidden} ) => {
  console.log('%c welcome to the playground', 'color: blue')
  const stores = {userStore, viewStore, quizStore}
  console.log(`%c stores are on the window object (window.stores)`, 'color: purple')
  window['stores']=stores
  return (
    <div style={{display: hidden ? 'none' : 'block'}}>
      chimken
    </div>
  )
})






