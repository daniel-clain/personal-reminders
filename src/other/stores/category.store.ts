import { observable } from 'mobx'
import dataService from '../services/data.service'
import { Category_Type } from '../types/category.type'

 const categoryStore = observable({
  categories: <Category_Type[]>[],
  addCategory: (category: Category_Type) => dataService.add('Categories', category),
  updateCategory: (category: Category_Type) => dataService.update('Categories', category),
  deleteCategory: categoryId => dataService.deleteData('Categories', categoryId),
})

dataService.data$('Categories', (categories: Category_Type[]) => categoryStore.categories = categories)

export default categoryStore
window['categoryStore'] = categoryStore