import React, { useState, useContext, ReactChild } from 'react'
import { PersonalQuizContext } from '../../other/mobx-stores/personal-quiz.store'

interface EditDeleteItemProps_Interface{
  value: string
  type: 'Question' | 'Category'
  id: string
  children: ReactChild
}

export default function EditDeleteItem({value, type, id, children}: EditDeleteItemProps_Interface) {
  const [expanded, setExpanded] = useState(false)
  const {questionStore, categoryStore}= useContext(PersonalQuizContext)

  function handleDelete(){
    const deleteConfirmed = confirm(`Are you sure you want to delete the ${type.toLocaleLowerCase()}: \n\t ${value}`)
    if(deleteConfirmed){
      setExpanded(false)
      switch(type){
        case 'Question': return questionStore.deleteQuestion(id)
        case 'Category': return categoryStore.deleteCategory(id)
      }
    }
  }

  return expanded ? 
    <div className="list__item--expanded">
      {children}
      <button type="button" onClick={() => setExpanded(false)}>Close</button>
      <button onClick={handleDelete}>Delete</button >
    </div>
    : 
    <div className="list__item" onClick={() => setExpanded(true)}>
      {value}
    </div>
      
} 
