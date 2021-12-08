import { observable } from 'mobx'
import { Reminder_Object } from '../object-models/reminder.object'
import { PriorityReminder_Object } from '../object-models/priority-reminder.object'
import { generatePriorityReminder } from './priority-reminder-generator.service'
import { ImportanceMark_Type, ImportanceRatings_Enum, maxRating } from '../sets/importance-mark.set'
import remindersService from './reminders.service'

const priorityReminderService = observable({
  activePriorityReminder: <PriorityReminder_Object>null,
  priorityReminderInProgress: false,
  importanceSubmitted: false,
  importanceMarkSubmitted: <ImportanceMark_Type>null,
  activeReminderIndex: null,
  inputAnswer: '',
  selectedCategoryIds: [],
  startPriorityReminder,
  submitReminder,
  submitImportanceMark,
  nextReminder,
  finishPriorityReminder,
  skipReminder
})

export default priorityReminderService


function startPriorityReminder() {
  try{
    priorityReminderService.activePriorityReminder = generatePriorityReminder()
    priorityReminderService.priorityReminderInProgress = true
    priorityReminderService.activeReminderIndex = 0
  }
  catch (e){
    console.error(e)
    alert(e)
  }
}

function submitReminder() {
  priorityReminderService.importanceSubmitted = true
}

function submitImportanceMark(importanceMark: ImportanceMark_Type) {
  priorityReminderService.importanceMarkSubmitted = importanceMark
}

function skipReminder(){
  const { activePriorityReminder, activeReminderIndex } = priorityReminderService
  if (activePriorityReminder.reminders.length == activeReminderIndex + 1) {
    finishPriorityReminder()
  }
  else {
    resetReminderState()
    priorityReminderService.activeReminderIndex++
  }
}



function nextReminder(activeReminder: Reminder_Object,) {
  const { activePriorityReminder, activeReminderIndex, importanceMarkSubmitted } = priorityReminderService
  
  if(!importanceMarkSubmitted){
    alert('You must select a importance mark')
    return
  }

  updateReminderImportanceRating(activeReminder, importanceMarkSubmitted)


  if (activePriorityReminder.reminders.length == activeReminderIndex + 1) {
    finishPriorityReminder()
  }
  else {
    resetReminderState()
    priorityReminderService.activeReminderIndex++
  }
}

function updateReminderImportanceRating(reminder: Reminder_Object, importanceMark: ImportanceMark_Type){

  if(!importanceMark) throw('Importance Mark invalid')

  const markRating = ImportanceRatings_Enum[importanceMark]
  const currentRating = reminder.importanceRating || 2
  
  
  let newImportanceRating = 
    currentRating + markRating < 0 ? 0 :
    currentRating + markRating > maxRating ? maxRating :
    currentRating + markRating


  remindersService.updateReminder({
    ...reminder,
    importanceRating: newImportanceRating
  })
}



function finishPriorityReminder() {
  resetReminderState()
  priorityReminderService.priorityReminderInProgress = false
  priorityReminderService.activePriorityReminder = null
  priorityReminderService.activeReminderIndex = null
  priorityReminderService.selectedCategoryIds = []

}

function resetReminderState() {
  priorityReminderService.inputAnswer = ''
  priorityReminderService.importanceSubmitted = false
  priorityReminderService.importanceMarkSubmitted = null
}

