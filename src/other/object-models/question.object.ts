import Data_Object from "./data.object";

export interface Question_Object extends Data_Object {
  id?: string
  value: string
  correctAnswer: string
  categoryIds?: string[]
  correctnessRating?: number
  dateLastAsked?: Date
  dateLastUpdated: Date
}

