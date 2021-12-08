import { observer } from 'mobx-react'
import React from 'react'
import priorityReminderService from '../../../../other/services/priority-reminder.service'
import CategorySelector_Partial from '../../../partials/CategorySelector.partial'

export default observer(() => {
  const label = 'Select priority reminder categories'
  return (
    <priorityReminder-setup>
      <form-field name={label}>
        <CategorySelector_Partial {...{
          label,
          value: priorityReminderService.selectedCategoryIds,
          onChange: categoryIds => {
            priorityReminderService.selectedCategoryIds = categoryIds
          }
        }} />
      </form-field>
      <button className='start' onClick={priorityReminderService.startPriorityReminder}>Start Priority Reminder</button>
    </priorityReminder-setup>
  )
})
