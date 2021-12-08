import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import categoriesService from '../../../../other/services/categories.service'
import priorityReminderService from '../../../../other/services/priority-reminder.service'
import { show } from '../../../../other/services/utilities.service'
import importanceMarkSet from '../../../../other/sets/importance-mark.set'
import TextField from '../../../partials/TextField.partial'

export default observer(() => {

  const {activeReminderIndex, activePriorityReminder, submitImportanceMark, importanceMarkSubmitted} = priorityReminderService

  const {categories} = categoriesService
  const [activeReminder, setActiveReminder] = useState(activePriorityReminder.reminders[activeReminderIndex])
  const {value, categoryIds} = activeReminder
  const lastReminder = activePriorityReminder.reminders.length == activeReminderIndex + 1

  useEffect(() => {
    setActiveReminder(activePriorityReminder.reminders[activeReminderIndex])
  }, [activeReminderIndex])
  

  const labels = {
    reminder: `Reminder ${activeReminderIndex + 1}`
  }

  return (
    <priorityReminder-reminder>
      <form-field name={labels.reminder}>
        <TextField {...{
          label: labels.reminder,
          value,
          onChange: value => setActiveReminder({ ...activeReminder, value })
        }}/>
        <reminder-categories>{
          categories
          .filter(c => categoryIds.some(id => id == c.id))
          .map(c => c.value)
          .join(', ')
        }</reminder-categories>
      </form-field>
      
      {show(
        <button 
          className='submit'
          onClick={priorityReminderService.submitReminder}
        >
          Submit
        </button>
      ).if(priorityReminderService.importanceSubmitted == false)}

      {show(<>
               
        <importance-mark-buttons>
          {importanceMarkSet.map(importanceMark =>
            <importance-mark-button
              class={'button ' + importanceMark}
              {...{
                key: importanceMark,
                onClick: () => submitImportanceMark(importanceMark)
              }}          
              {...importanceMarkSubmitted == importanceMark ? {selected: ''} : importanceMarkSubmitted ? {notselected: ''} : ''}
            >
              {importanceMark}
            </importance-mark-button> 
          )}
        </importance-mark-buttons>

        {show(<>
          <hr />
          <button 
            className='next'
            onClick={() => priorityReminderService.nextReminder(activeReminder)}
          >
            {lastReminder ? 'Finish' : 'Next'}
          </button>
        </>).if(priorityReminderService.importanceSubmitted == true)}

      </>).if(priorityReminderService.importanceSubmitted == true)}
    </priorityReminder-reminder>
  )


})
