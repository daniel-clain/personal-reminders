import { observer } from 'mobx-react'
import React from 'react'
import categoriesService from '../../../../other/services/categories.service'
import quizService from '../../../../other/services/quiz.service'
import { show } from '../../../../other/services/utilities.service'
import correctnessMarkSet from '../../../../other/sets/correctness-mark.set'
import TextField from '../../../partials/TextField.partial'

export default observer(() => {
  const {activeQuestionIndex, activeQuiz, submitCorrectnessMark, correctnessMarkSubmitted} = quizService
  const {categories} = categoriesService
  const {value, correctAnswer, categoryIds} = activeQuiz.questions[activeQuestionIndex]
  const lastQuestion = activeQuiz.questions.length == activeQuestionIndex + 1

  const labels = {
    question: `Question ${activeQuestionIndex + 1}`,
    answerInput: `Enter you're answer`,
    correctAnswer: 'The correct answer is',
  }

  return (
    <quiz-question>
      <form-field name={labels.question}>
        <TextField {...{
          label: labels.question,
          value,
          readonly: true
        }}/>
        <question-categories>{
          categories
          .filter(c => categoryIds.some(id => id == c.id))
          .map(c => c.value)
          .join(', ')
        }</question-categories>
      </form-field>
      
      <form-field name={labels.answerInput}>
        <TextField {...{
          label: labels.answerInput,
          value: quizService.inputAnswer,
          onChange: (answer) => quizService.inputAnswer = answer
        }} />
      </form-field>

      {show(
        <button 
          className='submit'
          onClick={quizService.submitQuestion}
        >
          Submit
        </button>
      ).if(quizService.answerSubmitted == false)}

      {show(<>
      
        <form-field name={labels.correctAnswer}>
          <TextField {...{
            label: labels.correctAnswer,
            value: correctAnswer,
            readonly: true
          }}/>
        </form-field>

        {correctnessMarkSet.map(correctnessMark =>
          <correctness-mark-button
            class={'button ' + correctnessMark}
            {...{
              key: correctnessMark,
              onClick: () => submitCorrectnessMark(correctnessMark)
            }}          
            {...correctnessMarkSubmitted == correctnessMark ? {selected: ''} : correctnessMarkSubmitted ? {notselected: ''} : ''}
          >
            {correctnessMark}
          </correctness-mark-button> 
        )}

        {show(<>
          <hr />
          <button 
            className='next'
            onClick={() => quizService.nextQuestion()}
          >
            {lastQuestion ? 'Finish' : 'Next'}
          </button>
        </>).if(quizService.answerSubmitted == true)}

      </>).if(quizService.answerSubmitted == true)}
    </quiz-question>
  )


})
