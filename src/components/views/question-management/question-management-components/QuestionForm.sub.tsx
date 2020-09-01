import React, { useState } from 'react'
import TextField from '../../../partials/TextField.partial'
import { Question_Type } from '../../../../other/types/question.type'
import questionStore from '../../../../other/stores/question.store'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'

interface FormProps_Interface {
  editedQuestion?: Question_Type
}

export default function QuestionForm_Sub({ editedQuestion }: FormProps_Interface) {
  const emptyQuestion: Question_Type = { value: '', correctAnswer: '', categoryIds: [], correctnessRating: 2, dateLastAsked: null, dateLastUpdated: null }
  let initialQuestion: Question_Type = { ...emptyQuestion }

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
      <TextField { ...answerFieldProps()}/>
      <CategorySelector_Partial {...categoriesFieldProps()}/>

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

  function categoriesFieldProps(){
    return {
      label: "Categories",
      categoryIds,
      onValueUpdated: categoryIds => setQuestion({ ...question, categoryIds })
    }
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
      console.error(error)
      alert(error)
    }
  }
}
