import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import EditDeleteItem from '../../../partials/EditDeleteItem'
import QuestionForm_Sub from './QuestionForm.sub'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'

function QuestionList_Sub() {
  const {questions} = useContext(PersonalQuizContext).questionStore
  const [questionFilter, setQuestionFilter] = useState('')
  return (
    <div className="list questions-list">
      <h1>Questions</h1>
      
      <input className='filter list-filter' onChange={e => setQuestionFilter(e.target.value.toLocaleLowerCase())}/>
      {questions
      .filter(q => q.value.toLocaleLowerCase().includes(questionFilter))
      .map((question, i) => (
        <EditDeleteItem 
          value={question.value} 
          id={question.id} 
          type={'Question'} 
          key={i}
        >
          <QuestionForm_Sub editedQuestion={question} />
        </EditDeleteItem>
      ))}
    </div>
  )
}
export default observer(QuestionList_Sub)
