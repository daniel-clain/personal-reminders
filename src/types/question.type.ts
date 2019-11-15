import { Tag } from "./tag.type";

export type Question = {
  id: string
  value: string
  correctAnswer: string
  tags: Tag[]
  correctnessRating?: number
  dateLastAsked: Date
  dateLastUpdated: Date
}