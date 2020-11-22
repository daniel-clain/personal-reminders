export type CorrectnessMark_Type = 'Wrong' | 'Kinda' | 'Almost' | 'Correct'
const correctnessMarkSet: CorrectnessMark_Type[] = ['Correct', 'Almost', 'Kinda', 'Wrong']

export const maxRating = 10

export enum CorrectnessRatings_Enum {
  'Wrong' = -2,
  'Kinda' = -1,
  'Almost' = 1,
  'Correct' = 2
}

export default correctnessMarkSet