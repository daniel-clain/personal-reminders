import Data_Object from "./data.object";


export interface Category_Object extends Data_Object{
  id?: string
  dateLastUpdated?: Date
  value: string
  parentCategoryIds: string[]
  childCategoryIds: string[]
}