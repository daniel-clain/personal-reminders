import React, { useState } from 'react'

import { Category_Type } from '../../other/types/category.type'
import { observer } from 'mobx-react'
import categoryStore  from '../../other/stores/category.store';

interface CategorySelectorProps_Interface {
  label: string
  categoryIds: string[]
  onValueUpdated: (categoryIds: string[]) => void
}

const CategorySelector_Partial = ({ label, categoryIds, onValueUpdated }: CategorySelectorProps_Interface) => {
  const [categoryFilter, setCategoryFilter] = useState(null)


  return <div className='category-selector'>
    <header>
      <h2 className='category-selector__heading'>{label}</h2>
      <input className='category-selector__filter filter' onChange={e => setCategoryFilter(e.target.value)}/>
    </header>
    <div className="categories-container">
      {categoryStore.categories
      .filter(doesCategoryMatchFilter)
      .map(category =>
        <button key={category.id}
          className={categoryIds?.some(id => id == category.id) ? 
            'selected' : ''
          }
          onClick={() => handleCategorySelected(category)}
        >
          {category.value}
        </button>
      )}
    </div>
  </div>

  function handleCategorySelected(selectedCategory: Category_Type){

    const categoryIsAlreadySelected = categoryIds?.find(id => id == selectedCategory.id)
    
		if (categoryIsAlreadySelected) {	
			onValueUpdated(categoryIds.filter(id => id != selectedCategory.id))
		} else {
      onValueUpdated([...categoryIds, selectedCategory.id])
		}
  }

  function doesCategoryMatchFilter(category: Category_Type){
    return !categoryFilter || 
      category.value.toLocaleLowerCase()
      .includes(categoryFilter.toLocaleLowerCase())
  }
}

export default observer(CategorySelector_Partial)
