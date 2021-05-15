import React from 'react'
import { Category_Object } from '../../other/object-models/category.object'
import FormFields_Set from '../../other/sets/form-field.set'
export interface FormFieldProps_Interface<T extends string | string[]> {
  label?: string
  value?: T
  onChange?: (value) => void
  editable?: boolean
  type?: FormFields_Set
  editedCategory?: Category_Object
}

const TextField_Partial = ({label, value, onChange}: FormFieldProps_Interface<string>) => {  
  return <>
  
    {label ? <label>{label}:</label> : ''}
    <textarea
      value={ value ? value : ''}
      onChange={(e: any) => {
        onChange?.(e.target.value)
      }}
    >
      
    </textarea>
  </>
}

export default TextField_Partial
