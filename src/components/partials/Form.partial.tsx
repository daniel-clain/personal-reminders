import React from 'react'

import { show } from '../../other/services/utilities.service';
import ds from '../../other/services/data.service';
import FormButton_Set from '../../other/sets/form-button.set';
import FormFields_Set from '../../other/sets/form-field.set';
import TextField_Partial from './TextField.partial'
import CategorySelector_Partial from './CategorySelector.partial'
import questionsService from '../../other/services/questions.service';
import { DataObjects_Set } from '../../other/sets/data-objects.set';
import { DataTypes_Set } from '../../other/sets/data-types.set';
import categoriesService from '../../other/services/categories.service';
import { Question_Object } from '../../other/object-models/question.object';
import { Category_Object } from '../../other/object-models/category.object';
import { observer } from 'mobx-react';

export interface FormFieldProps_Interface<T extends string | string[]> {
  label?: string
  value?: T
  onChange?: (value) => void
  editable?: boolean
  type?: FormFields_Set
}

export interface FormPartialProps_Interface{
  dataType: DataTypes_Set,
  data: DataObjects_Set
  isEdit?: boolean
  fields: FormFieldProps_Interface<string | string[]>[]
  onUpdate?(): void
}

function Form_Partial({ dataType, data, fields, isEdit, onUpdate }: FormPartialProps_Interface){
  return <>
    {fields.map((fieldProps, i) =>       
      <form-field key={i}>
        {show(
          <TextField_Partial {...
            {...fieldProps, value: fieldProps.value as string}
          } />
        ).if(fieldProps.type == 'Input')}
        {show(
          <CategorySelector_Partial {...
            {...fieldProps, value: fieldProps.value as string[]}
          } />
        ).if(fieldProps.type == 'Category Select')}
      </form-field>
    )}
    <form-buttons>
      {show(
        <button className='add' onClick={() => handleClick('Add')}>
          Add
      </button>
      ).if(isEdit == false)}

      {show(<>
        <button className='update' onClick={() => handleClick('Update')}>
          Update
        </button>
        <button className='delete' onClick={() => handleClick('Delete')}>
          Delete
        </button>
      </>).if(isEdit == true)}
    </form-buttons>
  </>


  function handleClick(formButton: FormButton_Set) {
    const {addQuestion, updateQuestion, deleteQuestion} = questionsService
    const {addCategory, updateCategory, deleteCategory} = categoriesService

    if(dataType == 'Question'){
      const question = data as Question_Object
      if(formButton == 'Add')
        addQuestion(question)
      if(formButton == 'Update')
        updateQuestion(question)
      if(formButton == 'Delete')
        deleteQuestion(question)
    }
    if(dataType == 'Category'){
      const category = data as Category_Object
      if(formButton == 'Add')
        addCategory(category)
      if(formButton == 'Update')
        updateCategory(category)
      if(formButton == 'Delete')
        deleteCategory(category)
    }

    onUpdate()

  }

};

export default observer(Form_Partial)



