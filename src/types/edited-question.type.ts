import { Tag } from "./tag.type";

export type EditedQuestion = {
  value: string
  correctAnswer: string
  tags: Tag[]
}