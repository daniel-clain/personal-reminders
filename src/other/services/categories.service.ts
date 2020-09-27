import { observable } from "mobx";
import { Category_Object } from "../object-models/category.object";
import dataService from "./data.service";

const categoriesService = observable({
  categories: <Category_Object[]>[],
  addCategory: (category: Category_Object) => 
    dataService.add('Category', category)
    .then(category => updateParentAndChildCategories(category))
  ,
  deleteCategory: (category: Category_Object) => {
    const confirmed = confirm(`Are you sure you want to delete this category "${category.value}"`)
    if(confirmed == false) return
    else{
      updateParentAndChildCategories({
        ...category, 
        parentCategoryIds: [], 
        childCategoryIds: []
      }),
      dataService.deleteData('Category', category)
    }
  },
  updateCategory: (category: Category_Object) => (
    updateParentAndChildCategories(category),
    dataService.update('Category', category)
  )
})


export default categoriesService


dataService.data$('Categories', (categories: Category_Object[]) => categoriesService.categories = categories)

function updateParentAndChildCategories(updatedCategroy: Category_Object) {

  categoriesService.categories.forEach(loopCategory => {
    if (
      updatedCategroy.parentCategoryIds.includes(loopCategory.id) &&
      loopCategory.childCategoryIds.includes(updatedCategroy.id) == false
    ) {
      dataService.update('Category', {
        ...loopCategory,
        childCategoryIds: [...loopCategory.childCategoryIds, updatedCategroy.id]
      })
    }
    else if (
      updatedCategroy.childCategoryIds.includes(loopCategory.id) &&
      loopCategory.parentCategoryIds.includes(updatedCategroy.id) == false
    ) {
      dataService.update('Category', {
        ...loopCategory,
        parentCategoryIds: [...loopCategory.parentCategoryIds, updatedCategroy.id]
      })
    }
    else if (
      loopCategory.childCategoryIds.includes(updatedCategroy.id) &&
      updatedCategroy.parentCategoryIds.includes(loopCategory.id) == false
    ) {
      dataService.update('Category', {
        ...loopCategory,
        childCategoryIds: loopCategory.childCategoryIds.filter(id => id != updatedCategroy.id)
      })
    }
    else if (
      loopCategory.parentCategoryIds.includes(updatedCategroy.id) &&
      updatedCategroy.childCategoryIds.includes(loopCategory.id) == false
    ) {
      dataService.update('Category', {
        ...loopCategory,
        parentCategoryIds: loopCategory.parentCategoryIds.filter(id => id != updatedCategroy.id)
      })
    }
  })
}