import { Data } from "../interfaces/data.interface"

export type Category_Type = Data & {
  id?: string
  dateLastUpdated?: Date
  value: string
  parentCategoryIds: string[]
  childCategoryIds: string[]

}