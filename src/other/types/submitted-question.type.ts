import { Tag } from "./tag.type";

export type SubmittedQuestion = {
  value: string
  correctAnswer: string
  tags: Tag[]
}