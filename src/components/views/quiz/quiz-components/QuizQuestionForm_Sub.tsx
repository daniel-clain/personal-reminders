import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import categoriesService from '../../../../other/services/categories.service'
import quizService from '../../../../other/services/quiz.service'
import { show } from '../../../../other/services/utilities.service'
import correctnessMarkSet from '../../../../other/sets/correctness-mark.set'
import {Form_Partial} from '../../../partials/Form.partial'
import TextField from '../../../partials/TextField.partial'

export default observer(() => {

  const {activeQuestionIndex, activeQuiz, submitCorrectnessMark, correctnessMarkSubmitted} = quizService

  const {categories} = categoriesService
  const [activeQuestion, setActiveQuestion] = useState(activeQuiz.questions[activeQuestionIndex])
  const {value, correctAnswer, categoryIds} = activeQuestion
  const lastQuestion = activeQuiz.questions.length == activeQuestionIndex + 1

  useEffect(() => {
    setActiveQuestion(activeQuiz.questions[activeQuestionIndex])
  }, [activeQuestionIndex])
  

  const labels = {
    question: `Question ${activeQuestionIndex + 1}`,
    answerInput: `You're answer`,
    correctAnswer: 'The correct answer is'
  }

  return (
    <quiz-question>
      <form-field name={labels.question}>
        <TextField {...{
          label: labels.question,
          value,
          onChange: value => setActiveQuestion({ ...activeQuestion, value })
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
        <Form_Partial 
          dataType='Question'
          data={activeQuestion}
          onDelete={quizService.skipQuestion}
          isEdit={true}
          hasSmallButtons={true}
          fields={[{
            label: 'Correct Answer',
            value: correctAnswer,
            type: 'Input',
            onChange: answerValue => setActiveQuestion({ ...activeQuestion, correctAnswer: answerValue })
          }]}
        />
        
        <correctness-mark-buttons>
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
        </correctness-mark-buttons>

        {show(<>
          <hr />
          <button 
            className='next'
            onClick={() => quizService.nextQuestion(activeQuestion)}
          >
            {lastQuestion ? 'Finish' : 'Next'}
          </button>
        </>).if(quizService.answerSubmitted == true)}

      </>).if(quizService.answerSubmitted == true)}
    </quiz-question>
  )


})
