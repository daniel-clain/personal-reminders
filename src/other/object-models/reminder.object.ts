import Data_Object from "./data.object";

export interface Reminder_Object extends Data_Object {
  id?: string
  value: string
  categoryIds?: string[]
  importanceRating?: number
  dateLastAsked?: Date
  dateLastUpdated: Date
}

