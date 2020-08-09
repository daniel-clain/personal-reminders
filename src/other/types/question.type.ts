

export type Question_Type = {
  id: string
  value: string
  correctAnswer: string
  categoryIds: string[]
  correctnessRating: number
  dateLastAsked: Date
  dateLastUpdated: Date
}
