
import { observable } from "mobx";
import { Reminder_Object } from "../object-models/reminder.object";
import dataService from "./data.service";

const remindersService = observable({
  reminders: <Reminder_Object[]>[],
  addReminder: (reminder: Reminder_Object) =>
    dataService.add('Reminder', reminder),
  deleteReminder: (reminder: Reminder_Object) =>
    dataService.deleteData('Reminder', reminder),
  updateReminder: (reminder: Reminder_Object) =>
    dataService.update('Reminder', reminder)
})

export default remindersService

dataService.data$('Reminders', (reminders: Reminder_Object[]) => {
  remindersService.reminders = reminders
  window['reminders'] = reminders
})
