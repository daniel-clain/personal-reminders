import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
import { FormFieldProps_Interface } from './Form.partial';
import categoriesService from '../../other/services/categories.service';



const CategorySelector_Partial = ({label, value, onChange }: FormFieldProps_Interface) => {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const categoryIds: string[] = value as string[]

  const filterRef = useRef(null);

  useEffect (() => {
    filterRef.current.addEventListener('filtering', 
      filteringEvent => setCategoryFilter(filteringEvent.detail)
    )
  })

  return (
    <category-selector>
      <category-filter 
        contentEditable
        ref={filterRef}
      />
      <div className="categories">
        {categoriesService.categories
        .filter(doesCategoryMatchFilter)
        .map(category => 
        <category-tag         
          {...
            categoryIds?.some(id => id == category.id) ? {selected:''} : 
            expandedCategory?.some(id => id == category.id) ? {expanded:''} : 
            category.childCategoryIds.length ? {'has-children':''} : {} 
          }
          key={category.id}>
          <div
            className='expander'
            onClick={() => handleCategorySelected(category)}
          >
            {category.value}
          </div>
        </category-tag>)}
      </div>
    </category-selector>
  )

  function handleCategorySelected(selectedCategory: Category_Object){

    const categoryIsAlreadySelected = categoryIds?.find(id => id == selectedCategory.id)
    
		if (categoryIsAlreadySelected) {	
			onChange(categoryIds.filter(id => id != selectedCategory.id))
		} else {
      onChange([...categoryIds, selectedCategory.id])
		}
  }

  function doesCategoryMatchFilter(category: Category_Object){
    return !categoryFilter || 
      category.value.toLocaleLowerCase()
      .includes(categoryFilter.toLocaleLowerCase())
  }
}

export default observer(CategorySelector_Partial)

