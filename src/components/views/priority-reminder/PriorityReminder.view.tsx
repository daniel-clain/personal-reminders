import React from 'react'
import { observer } from 'mobx-react'
import { show } from '../../../other/services/utilities.service'
import PriorityReminderSetupForm_Sub from './priority-reminder-components/PriorityReminderSetupForm_Sub'
import PriorityReminderReminderForm_Sub from './priority-reminder-components/PriorityReminderForm_Sub'
import priorityReminderService from '../../../other/services/priority-reminder.service'

function PriorityReminder_View() {

  return (
    <priorityReminder-view>
      {show(
        <PriorityReminderSetupForm_Sub/>
      ).if(priorityReminderService.priorityReminderInProgress == false)}

      {show(
        <PriorityReminderReminderForm_Sub/>
      ).if(priorityReminderService.priorityReminderInProgress == true)}
    </priorityReminder-view>
  )
}

export default observer(PriorityReminder_View)
