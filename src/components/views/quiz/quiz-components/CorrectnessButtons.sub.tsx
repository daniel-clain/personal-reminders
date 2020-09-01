import React from 'react'
import { CorrectnessMark_Set } from '../../../../other/sets/correctness-mark.set'
import quizStore  from '../../../../other/stores/quiz.store'
import { observer } from 'mobx-react'

function CorrectnessButtons_Sub() {
  const correctnessMarks: CorrectnessMark_Set[] = ['Correct', 'Almost', 'Kinda', 'Wrong']
  const { submitCorrectnessMark, correctnessMarkSubmitted } = quizStore
  return <>
    {correctnessMarks.map(correctnessMark =>
      <button {...buttonProps(correctnessMark)}>
        {correctnessMark}
      </button>
    )}
  </>
  function buttonProps(correctnessMark){
    const props: any = {      
      key: correctnessMark,
      onClick: () => submitCorrectnessMark(correctnessMark)
    }
    if(correctnessMarkSubmitted == correctnessMark)
      props.className = 'selected'
      
    return props
  }
}

export default observer(CorrectnessButtons_Sub)
