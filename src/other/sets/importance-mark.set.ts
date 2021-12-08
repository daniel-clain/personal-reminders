export type ImportanceMark_Type = 'Unimportant' | 'Kinda' | 'Mostly' | 'Important'
const importanceMarkSet: ImportanceMark_Type[] = ['Important', 'Mostly', 'Kinda', 'Unimportant']

export const maxRating = 10

export enum ImportanceRatings_Enum {
  'Unimportant' = -2,
  'Kinda' = -1,
  'Almost' = 1,
  'Important' = 2
}

export default importanceMarkSet