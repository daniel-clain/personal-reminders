import React, { useContext } from 'react'
import { CorrectnessMark_Type } from '../../../../other/types/correctness-mark.type'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function CorrectnessButtons_Sub() {
  const correctnessMarks: CorrectnessMark_Type[] = ['Correct', 'Almost', 'Kinda', 'Wrong']
  const {quizStore} = useContext(PersonalQuizContext)
  const { submitCorrectnessMark } = quizStore
  return <>
    {correctnessMarks.map(correctnessMark =>
      <button key={correctnessMark} onClick={() => submitCorrectnessMark(correctnessMark)}>{correctnessMark}</button>
    )}
  </>
}

export default CorrectnessButtons_Sub
