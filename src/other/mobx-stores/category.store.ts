import { observable, action } from 'mobx'
import { Category_Type } from '../types/category.type'
import st from './stub-categories'
import { SubmittedCategory_Type } from '../types/submitted-category.type'
import { EditedCategory_Type } from '../types/edited-category.type'
import { Collection } from '../interfaces/collection.interface'



export function CategoryStore() {

  let categoriesCollection: Collection
  const stubCategories: Category_Type[] = st.map(x => ({ ...x, dateLastUpdated: new Date() }))
  let categories: Category_Type[] = observable([])

  return {
    categories,
    addCategory: action(addCategory),
    getCategory: action(getCategory),
    updateCategory: action(updateCategory),
    deleteCategory,
    setCollection
  }

  function setCollection(collection: Collection) {
    categoriesCollection = collection

    categoriesCollection.onSnapshot(snapshot => {
      categories.splice(0, categories.length,
        ...snapshot.docs.map(doc => (
          <Category_Type>{ ...doc.data(), id: doc.id }
        ))
      )
    })
  }

  function addCategory(submittedCategory: SubmittedCategory_Type) {
    
    if(!categoriesCollection)throw('no question collection')
    categoriesCollection.add({
      ...submittedCategory,
      dateLastUpdated: new Date()
    })
  }

  function updateCategory(editedCategory: EditedCategory_Type) {
    if(!categoriesCollection)throw('no question collection')
    const { id, ...submittedCategory } = editedCategory
    try { validate(submittedCategory) }
    catch (e) { alert(`Update Failed. ${e}`) }

    categories.find(category => {
      if (category.id == editedCategory.id) {
        category = {
          ...category,
          ...editedCategory,
          dateLastUpdated: new Date()
        }
        return true
      }
    })
  }

  function deleteCategory(id: string) {
    if(!categoriesCollection)throw('no question collection')
    categoriesCollection.doc(id).delete()
  }

  function validate({ value }: SubmittedCategory_Type) {
    const validationErrors = []
    if (!value) validationErrors.push('requires a category name')
    if (validationErrors.length > 0) throw (validationErrors)
  }

  function getCategory(id) {
    return categories.find(t => t.id == id)
  }
}