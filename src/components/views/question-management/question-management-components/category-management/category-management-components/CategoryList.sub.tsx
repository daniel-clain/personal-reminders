import React, { useContext } from "react"
import {observer} from 'mobx-react'
import EditDeleteItem from "../../../../../partials/EditDeleteItem"
import CategoryForm_Sub from "./CategoryForm.sub"
import { PersonalQuizContext } from "../../../../../../other/mobx-stores/personal-quiz.store"


function CategoryList_Sub(){  
  const {categoryStore} = useContext(PersonalQuizContext)
  return (
    <div className="category-list">
      <h1>Categories</h1>
      {categoryStore.categories.map((category, i) =>
        <EditDeleteItem 
          value={category.value} 
          id={category.id} 
          type={'Category'} 
          key={i}
        >
          <CategoryForm_Sub editedCategory={category} />
        </EditDeleteItem>
      )}
    </div>
  )
}
export default observer(CategoryList_Sub)