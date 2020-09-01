import React from 'react'
import { observer } from 'mobx-react'


export default observer(({hidden} ) => {
  console.log('%c welcome to the playground', 'color: blue')
  let doFibo = (number = 0, next = 1) => (
    console.log,
    setTimeout(doFibo, 1000, next, number + next))
  return (
    <div style={{display: hidden ? 'none' : 'block'}}>
      chimken
    </div>
  )
})






