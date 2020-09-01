import React from 'react'

export interface TextFieldProps_Interface{
  label?: string, 
  value?: string, 
  onValueUpdated?: (value: string) => void
  readonly?: boolean
}


const TextField_Partial = ({label, value, onValueUpdated, readonly}: TextFieldProps_Interface) => {  
  return <div className='text-field'>
    <div className='text-field__label'>
      {label}:
    </div>
    <div 
      className='text-field__input' 
      contentEditable='true'
      onBlur={e => onValueUpdated?.(e.target.innerText)}
      suppressContentEditableWarning={true}
    >
      {value}
    </div>
  </div>
}

export default TextField_Partial
