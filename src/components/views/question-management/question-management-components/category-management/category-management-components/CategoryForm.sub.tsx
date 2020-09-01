import React, { useState } from 'react'
import TextField, { TextFieldProps_Interface } from '../../../../../partials/TextField.partial'
import categoryStore from '../../../../../../other/stores/category.store'
import { Category_Type } from '../../../../../../other/types/category.type'

interface FormProps_Interface {
  editedCategory?: Category_Type
}

export default function CategoryForm_Sub({ editedCategory }: FormProps_Interface) {

  const emptyCategory: Category_Type = { value: '', parentCategoryIds: [], childCategoryIds: [] }
  let initialCategory: Category_Type = { ...emptyCategory }

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
      console.error(error)
      alert(error)
    }
  }
}
