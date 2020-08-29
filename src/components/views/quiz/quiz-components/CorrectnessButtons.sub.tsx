import React from 'react'
import { CorrectnessMark_Type } from '../../../../other/types/correctness-mark.type'
import quizStore  from '../../../../other/stores/quiz.store'
import { observer } from 'mobx-react'

function CorrectnessButtons_Sub() {
  const correctnessMarks: CorrectnessMark_Type[] = ['Correct', 'Almost', 'Kinda', 'Wrong']
  const { submitCorrectnessMark, correctnessMarkSubmitted } = quizStore
  return <>
    {correctnessMarks.map(correctnessMark =>
      <button 
        key={correctnessMark} 
        className={
          correctnessMarkSubmitted == correctnessMark ? 'selected' : ''
        }
        onClick={() => submitCorrectnessMark(correctnessMark)}
      >
          {correctnessMark}
      </button>
    )}
  </>
}

export default observer(CorrectnessButtons_Sub)
