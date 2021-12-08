import React from 'react'
import ReminderForm_Sub from './reminder-management-components/ReminderForm.sub'
import List_Partial from '../../partials/List.partial'

export default () =>

<reminder-management>
  <reminder-form class='section'>
    <section-heading>Add Reminder</section-heading>
    <ReminderForm_Sub />
  </reminder-form>

  <reminder-list class='section'>
    <section-heading>Reminders List</section-heading>
    <List_Partial type='Reminder' />
  </reminder-list>

</reminder-management>
