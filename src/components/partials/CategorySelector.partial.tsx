import React, { useState, useContext } from 'react'
import { Category_Type } from '../../other/types/category.type'
import { observer } from 'mobx-react'
import { PersonalQuizContext } from '../../other/mobx-stores/personal-quiz.store'

interface CategorySelectorProps_Interface {
  selectedCategoryIds: string[]
  categorySelected: (category: Category_Type) => void
}

function CategorySelector_Partial({ selectedCategoryIds, categorySelected }: CategorySelectorProps_Interface) {
  const {categoryStore} = useContext(PersonalQuizContext)
  const { categories } = categoryStore
  const [categoryFilter, setCategoryFilter] = useState(null)

  function doesCategoryMatchFilter(category: Category_Type){
    return !categoryFilter || 
      category.value.toLocaleLowerCase()
      .includes(categoryFilter.toLocaleLowerCase())
  }

  return <div className='category-selector'>
    <header>
      <h2 className='category-selector__heading'>Select categories for quiz</h2>
      <input className='category-selector__filter filter' onChange={e => setCategoryFilter(e.target.value)}/>
    </header>
    <div className="categories-container">
      {categories
      .filter(doesCategoryMatchFilter)
      .map(category =>
        <button key={category.id}
          className={
            selectedCategoryIds.some(id => id == category.id) ? 'selected' : ''
          }
          onClick={() => categorySelected(category)}
        >
          {category.value}
        </button>
      )}
    </div>
  </div>
}

export default observer(CategorySelector_Partial)
