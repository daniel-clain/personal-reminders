import React, { useState } from 'react'
import { Reminder_Object } from '../../../../other/object-models/reminder.object'
import {Form_Partial} from '../../../partials/Form.partial'

interface FormProps_Interface {
  editedReminder?: Reminder_Object
  onUpdate?(): void
}

export default function ReminderForm_Sub({ editedReminder, onUpdate }: FormProps_Interface) {
  const emptyReminder: Reminder_Object = { value: '', categoryIds: [], importanceRating: 2, dateLastAsked: null, dateLastUpdated: null }
  let initialReminder: Reminder_Object = { ...emptyReminder }

  if (editedReminder) {
    initialReminder = editedReminder
  }

  const handleOnUpdate = () => {
    if(!editedReminder){
      setReminder(initialReminder)
    }
    
    if(onUpdate) onUpdate()
  }

  const [reminder, setReminder] = useState(initialReminder)
  const { value, categoryIds } = reminder

  return (
    <Form_Partial
      dataType='Reminder'
      data={reminder}
      onUpdate={handleOnUpdate}
      isEdit={!!editedReminder}
      fields={[
        {
          label: 'Reminder',
          value: value,
          type: 'Input',
          onChange: value => setReminder({ ...reminder, value })
        },
        {
          label: 'Categories',
          value: categoryIds,
          type: 'Category Select',
          onChange: categoryIds => setReminder({ ...reminder, categoryIds })
        }
      ]}
    />
  )
}
