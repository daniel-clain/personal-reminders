import React, { useState } from 'react'
import { Category_Object } from '../../../../other/object-models/category.object'
import {Form_Partial} from '../../../partials/Form.partial'

interface FormProps_Interface {
  editedCategory?: Category_Object
  onUpdate?(): void
}

export default ({ editedCategory, onUpdate }: FormProps_Interface) => {

  const emptyCategory: Category_Object = { value: '', parentCategoryIds: [], childCategoryIds: [] }
  let initialCategory: Category_Object = { ...emptyCategory }

  if (editedCategory) {
    initialCategory = editedCategory
  }
  const [category, setCategory] = useState(initialCategory)
  const { value, parentCategoryIds, childCategoryIds } = category
  
  const handleOnUpdate = () => {
    if(!editedCategory){
      setCategory(initialCategory)
    }
    if(onUpdate) onUpdate()
  }

  return (
    <Form_Partial
      dataType='Category'
      data={category}
      onUpdate={handleOnUpdate}
      isEdit={!!editedCategory}
      fields={[
        {
          label: 'Category',
          value: value,
          type: 'Input',
          onChange: value => setCategory({ ...category, value })
        },
        {
          label: 'Parent Categories',
          value: parentCategoryIds,
          type: 'Category Select',
          onChange: parentCategoryIds => setCategory({ ...category, parentCategoryIds }),
          editedCategory
        },
        {
          label: 'Child Categories',
          value: childCategoryIds,
          type: 'Category Select',
          onChange: childCategoryIds => setCategory({ ...category, childCategoryIds }),
          editedCategory
        }
      ]}
    />
  )
}