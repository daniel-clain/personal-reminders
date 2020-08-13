import React, { useState, useContext } from 'react'
import FormField from '../../../../../partials/FormField'
import { EditedCategory_Type } from '../../../../../../other/types/edited-category.type'
import { SubmittedCategory_Type } from '../../../../../../other/types/submitted-category.type'
import { PersonalQuizContext } from '../../../../../../other/mobx-stores/personal-quiz.store'
import TextField, { TextFieldProps_Interface } from '../../../../../partials/TextField'

export type CategoryFields = 'category name'

interface FormProps_Interface {
  editedCategory?: EditedCategory_Type
}

export default function CategoryForm_Sub({ editedCategory }: FormProps_Interface) {
  const {categoryStore} = useContext(PersonalQuizContext)

  const emptyCategory: SubmittedCategory_Type = { value: '' }
  let initialCategory: SubmittedCategory_Type = { ...emptyCategory }

  if (editedCategory) {
    const { id, ...rest } = editedCategory
    initialCategory = rest
  }
  const [category, setCategory] = useState(initialCategory)
  const { value } = category

  return (
    <div className="add-category">
      <h1>Add Category</h1>
      <TextField {...categoryFieldProps()}/>      
      <button onClick={submitCategory}>Submit New Category</button>
    </div>
  )

  function categoryFieldProps(): TextFieldProps_Interface{
    return {
      label: `Category Name`,
      value,
      onValueUpdated: value => setCategory({...category, value})
      
    }
  }


  function submitCategory() {
    try {
      if (editedCategory) {
        categoryStore.updateCategory({ ...category, id: editedCategory.id })
      } else {
        categoryStore.addCategory(category)
        setCategory(emptyCategory)
      }
    } catch (error) {
      alert(error)
    }
  }
}
