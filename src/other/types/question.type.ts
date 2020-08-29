import { Data } from "../interfaces/data.interface"


export type Question_Type = Data & {
  id?: string
  value: string
  correctAnswer: string
  categoryIds?: string[]
  correctnessRating?: number
  dateLastAsked?: Date
  dateLastUpdated: Date
}
