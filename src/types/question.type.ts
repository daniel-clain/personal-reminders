import { Tag } from "./tag.type";

export type CorrectnessRating = 'Wrong' | 'Kinda' | 'Almost' | 'Correct'

export type Question = {
  id: string
  value: string
  correctAnswer: string
  tags: Tag[]
  correctnessRating?: CorrectnessRating
  dateLastAsked: Date
  dateLastUpdated: Date
}