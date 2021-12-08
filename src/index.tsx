import React from 'react'
import {render} from 'react-dom'
import setupStyles from './other/services/style.service'
import {PersonalPriorityReminder_App} from './components/personal-priority-reminder.app';
setupStyles()

const personalPriorityReminderContainer = document.createElement('personal-priorityReminder')
document.body.append(personalPriorityReminderContainer)

render(<PersonalPriorityReminder_App/>, personalPriorityReminderContainer)
