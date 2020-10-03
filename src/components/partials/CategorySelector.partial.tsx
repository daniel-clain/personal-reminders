import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
import { FormFieldProps_Interface } from './Form.partial';
import categoriesService from '../../other/services/categories.service';
import { show } from '../../other/services/utilities.service';
import CategoriesList_Partial from './CategoriesList.partial';


const CategorySelector_Partial = ({label, value, onChange }: FormFieldProps_Interface<string[]>) => {
  const [categoryFilter, setCategoryFilter] = useState('')
  const [expandedCategories, setExpandedCategories] = useState([])
  const selectedCategoryIds: string[] = value

  const data = categoriesService.categories.filter(doesCategoryMatchFilter)
  .filter(onlyTopLevelCategories)

  return <>
  
    {label ? <label>{label}:</label> : ''}
    <category-selector>
      <input className='categories-filter'
        placeholder='filter...' onChange={e => setCategoryFilter(e.target.value.toLocaleLowerCase())} />
      <categories-container>

        <CategoriesList_Partial {...{categories: data, selectedCategoryIds, onCategorySelected}} />

      </categories-container>
    </category-selector>
  </>


  function onCategorySelected(selectedCategory: Category_Object){

    const categoryIsAlreadySelected = selectedCategoryIds?.find(id => id == selectedCategory.id)
    
		if (categoryIsAlreadySelected) {	
			onChange(selectedCategoryIds.filter(id => id != selectedCategory.id))
		} else {
      onChange([...selectedCategoryIds, selectedCategory.id])
		}
  }

  function doesCategoryMatchFilter(category: Category_Object){
    return !categoryFilter || 
      category.value.toLocaleLowerCase()
      .includes(categoryFilter.toLocaleLowerCase())
  }

  function onlyTopLevelCategories(category: Category_Object){
    return !category.parentCategoryIds?.length || selectedCategoryIds.some(id => category.id == id)
  }
}

export default observer(CategorySelector_Partial)

