import React, { useState, useContext } from 'react'
import FormField from '../../../partials/FormField'
import { SubmittedQuestion_Type } from '../../../../other/types/submitted-question.type'
import { EditedQuestion_Type } from '../../../../other/types/edited-question.type'
import { PersonalQuizContext } from '../../../../other/mobx-stores/personal-quiz.store'
import TextField from '../../../partials/TextField'

export type QuestionFields = 'question' | 'answer' | 'categories'

interface FormProps_Interface {
  editedQuestion?: EditedQuestion_Type
}

export default function QuestionForm_Sub({ editedQuestion }: FormProps_Interface) {
  const { questionStore } = useContext(PersonalQuizContext)
  const emptyQuestion: SubmittedQuestion_Type = { value: '', correctAnswer: '', categoryIds: [], correctnessRating: 2 }
  let initialQuestion: SubmittedQuestion_Type = { ...emptyQuestion }

  if (editedQuestion) {
    const { id, ...rest } = editedQuestion
    initialQuestion = rest
  }

  const [question, setQuestion] = useState(initialQuestion)
  const { value, correctAnswer, categoryIds } = question

  return (
    <div className="add-question">
      <h1>Add Question</h1>

      <TextField {...questionFieldProps()}/>
      <TextField {  ...answerFieldProps()}/>

      <FormField
        name="categories"
        objKey="categoryIds"
        type="category selector"
        onUpdate={handleFieldUpdate}
        value={categoryIds}
      />
      <button onClick={submitQuestion}>{editedQuestion ? 'Update' : 'Submit'}</button>
    </div>
  )

  function questionFieldProps(){
    return {
      label:'Question',
      value,
      onValueUpdated: value => setQuestion({ ...question, value })      
    }
  }

  
  function answerFieldProps(){
    return {
      label:'Answer',
      value: correctAnswer,
      onValueUpdated: correctAnswer => setQuestion({ ...question, correctAnswer })      
    }
  }

  function handleFieldUpdate(value: any, key: any) {
    setQuestion({ ...question, [key]: value })
  }

  function submitQuestion() {
    try {
      if (editedQuestion) {
        questionStore.updateQuestion({ ...question, id: editedQuestion.id })
      } else {
        questionStore.addQuestion(question)
        setQuestion(emptyQuestion)
      }
    } catch (error) {
      alert(error)
    }
  }
}
