import { PriorityReminder_Object } from "../object-models/priority-reminder.object"
import { chainFunctions, shuffle, random } from "./utilities.service"
import { Reminder_Object } from "../object-models/reminder.object"
import { ReminderWithRating_Object } from "../object-models/reminder-with-rating.object"
import { ReminderWithRandomValue_Object } from "../object-models/reminder-with-random-value.object"
import remindersService from "./reminders.service"
import priorityReminderService from "./priority-reminder.service"
import { Category_Object } from "../object-models/category.object"
import categoriesService from "./categories.service"






const numberOfRemindersInPriorityReminder = 10

export function generatePriorityReminder(): PriorityReminder_Object {

  return {
    reminders: chainFunctions([
      f['Get all reminders that match selected categories'],
      f['Give each reminder a selection chance rating based on its importance rating and date since it was last asked'],
      f['Select random reminders based on thier selection chance']
    ])
  }
}



function getReminders(): Reminder_Object[] {
  const { reminders } = remindersService
  const { selectedCategoryIds } = priorityReminderService
  let returnReminders: Reminder_Object[]

  if (selectedCategoryIds.length == 0){
    returnReminders = reminders
  }
  else{
    returnReminders = reminders
    .filter(reminder => 
      f2['reminder has a category that is an indirect sub category of any selected category'](reminder, selectedCategoryIds)
    )
  }

  if (returnReminders.length == 0)
    throw ('No enough reminders to make priorityReminder')

  return returnReminders
}




function rateReminders(reminders: Reminder_Object[]): ReminderWithRating_Object[] {
  //console.log(`%c reminders ${reminders}`, 'color: white; background: green')
  const { mostRecentDate, lastAskedDaysRange } = getLaskAskedDaysRange(reminders)
  return reminders.map((reminder: Reminder_Object) => {
    const lastAskedRating: number = getLastAskedRating(mostRecentDate, reminder.dateLastAsked, lastAskedDaysRange)

    let rating = (reminder.importanceRating + lastAskedRating) / 2

    return { reminder, rating }
  })
}

function randomReminders(remindersWithRating: ReminderWithRating_Object[]): Reminder_Object[] {
  console.log(`%c remindersWithRating`, 'color: white; background: #021562', remindersWithRating)

  const remindersWithRandomValue: ReminderWithRandomValue_Object[] = assignRemindersRandomValue(remindersWithRating)
  console.log(`%c remindersWithRandomValue`, 'color: white; background: #740306', remindersWithRandomValue)
  const priorityReminderReminders: Reminder_Object[] =
    shuffle(remindersWithRandomValue)
      .sort((a, b) => a.randomValue - b.randomValue)
      .slice(0, numberOfRemindersInPriorityReminder)
      .map((remindersWithRandomValue: ReminderWithRandomValue_Object) => remindersWithRandomValue.reminder)

  return priorityReminderReminders
}



function getLaskAskedDaysRange(reminders: Reminder_Object[]) {
  const datesArray = reminders.map(reminder => reminder.dateLastAsked)
  const sortedDates = datesArray.sort()
  const longestAgo = sortedDates[0]
  const mostRecentDate = sortedDates[sortedDates.length - 1]
  if (!longestAgo || !mostRecentDate) {
    return {
      mostRecentDate: null,
      lastAskedDaysRange: null
    }
  }
  const diffTime = Math.abs(mostRecentDate.getTime() - longestAgo.getTime())
  const lastAskedDaysRange = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return { mostRecentDate, lastAskedDaysRange }
}

function getLastAskedRating(mostRecent: Date, reminderDate: Date, dayRange: number): number {
  if (dayRange == 0 || dayRange == null)
    return 10
  const diffTime = Math.abs(mostRecent.getTime() - reminderDate.getTime())
  const lastAskedDaysSinceMostRecent = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  if (lastAskedDaysSinceMostRecent == 0)
    return 10
  return Math.round(10 - lastAskedDaysSinceMostRecent / dayRange * 10)
}

function assignRemindersRandomValue(remindersWithRating: ReminderWithRating_Object[]): ReminderWithRandomValue_Object[] {
  return remindersWithRating.map(reminderWithRating => {
    const { rating, reminder } = reminderWithRating
    const randomValue = Math.round(rating * random())
    const reminderWithRandomValue: ReminderWithRandomValue_Object = { reminder, randomValue }
    return reminderWithRandomValue
  })
}



var f = {
  'Get all reminders that match selected categories': getReminders,
  'Give each reminder a selection chance rating based on its importance rating and date since it was last asked': rateReminders,
  'Select random reminders based on thier selection chance': randomReminders
}


const f2 = {
  "reminder has a category that is an indirect sub category of any selected category": (reminder: Reminder_Object, selectedCategoryIds: string[]): boolean => {

    return recursive(reminder.categoryIds, selectedCategoryIds)

    function recursive(q_c_ids, c_ids){
      
      const matchFound = f2["Array of category IDs includes reminder's category"](c_ids, q_c_ids)    

      if(matchFound) return true


      for(const c_id of c_ids){
        const childIds = f2["Get category ID's children category IDs"](c_id)
        if(childIds){
          const matchFound = recursive(q_c_ids, childIds)    
          if(matchFound) return true
        }
      }

    }
  },


  "Get category ID's children category IDs":
  categoryId => 
    categoriesService.categories.find
    (category => category.id == categoryId)
    ?.childCategoryIds
  ,

  "Array of category IDs includes reminder's category":
  (categoryIds: string[], reminderCategoryIds: string[]): boolean => 
    reminderCategoryIds.some
    (q_c_id => categoryIds.includes(q_c_id))
}

