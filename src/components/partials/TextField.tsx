import React, { createRef } from 'react'

export interface TextFieldProps_Interface{
  label?: string, 
  value?: string, 
  onValueUpdated?: (value: string) => void
  readonly?: boolean
}


function TextField({label, value, onValueUpdated, readonly}: TextFieldProps_Interface) {  
  return <div className='text-field'>
    <div className='text-field__label'>
      {label}:
    </div>
    <div 
      className='text-field__input' 
      contentEditable='true'
      onBlur={e => onValueUpdated(e.target.innerText)}
      suppressContentEditableWarning={true}
    >
      {value}
    </div>
  </div>
}

export default TextField
