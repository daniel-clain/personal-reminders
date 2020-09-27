import React, { useState } from 'react'
import { Question_Object } from '../../../../other/object-models/question.object'
import Form_Partial from '../../../partials/Form.partial'

interface FormProps_Interface {
  editedQuestion?: Question_Object
  onUpdate?(): void
}

export default function QuestionForm_Sub({ editedQuestion, onUpdate }: FormProps_Interface) {
  const emptyQuestion: Question_Object = { value: '', correctAnswer: '', categoryIds: [], correctnessRating: 2, dateLastAsked: null, dateLastUpdated: null }
  let initialQuestion: Question_Object = { ...emptyQuestion }

  if (editedQuestion) {
    initialQuestion = editedQuestion
  }

  const handleOnUpdate = () => {
    if(!editedQuestion){
      setQuestion(initialQuestion)
    }
    
    if(onUpdate) onUpdate()
  }

  const [question, setQuestion] = useState(initialQuestion)
  const { value, correctAnswer, categoryIds } = question

  return (
    <Form_Partial
      dataType='Question'
      data={question}
      onUpdate={handleOnUpdate}
      isEdit={!!editedQuestion}
      fields={[
        {
          label: 'Question',
          value: value,
          type: 'Input',
          onChange: value => setQuestion({ ...question, value })
        },
        {
          label: 'Correct Answer',
          value: correctAnswer,
          type: 'Input',
          onChange: correctAnswer => setQuestion({ ...question, correctAnswer })
        },
        {
          label: 'Categories',
          value: categoryIds,
          type: 'Category Select',
          onChange: categoryIds => setQuestion({ ...question, categoryIds })
        }
      ]}
    />
  )
}
