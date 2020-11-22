import React from 'react'
import { FormFieldProps_Interface } from './Form.partial'

const TextField_Partial = ({label, value, onChange, editable = true, type}: FormFieldProps_Interface<string>) => {  
  return <>
  
    {label ? <label>{label}:</label> : ''}
    <textarea
      className='text-input'
      value={ value ? value : ''}
      onChange={(e: any) => {
        console.log(e)
        onChange?.(e.target.value)
      }}
      suppressContentEditableWarning={true}
      {...{readOnly: editable ? false : true}}
    >
      
    </textarea>
  </>
}

export default TextField_Partial
