import React from 'react'
import { FormFieldProps_Interface } from './Form.partial'

const TextField_Partial = ({label, value, onChange, editable, type}: FormFieldProps_Interface<string>) => {  
  return <>
  
    {label ? <label>{label}:</label> : ''}
    <text-input 
      className='text-input'
      contentEditable
      onBlur={(e: any) => onChange?.(e.target.innerText)}
      suppressContentEditableWarning={true}
    >
      {value}
    </text-input>
  </>
}

export default TextField_Partial
