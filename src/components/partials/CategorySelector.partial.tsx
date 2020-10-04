import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
import { FormFieldProps_Interface } from './Form.partial';
import categoriesService from '../../other/services/categories.service';
import { show } from '../../other/services/utilities.service';
import CategoriesList_Partial from './CategoriesList.partial';


const CategorySelector_Partial = ({label, value, onChange }: FormFieldProps_Interface<string[]>) => {
  const [categoryFilter, setCategoryFilter] = useState('')
  const selectedCategoryIds: string[] = value

  let data = categoriesService.categories
  if(categoryFilter){
    data =  data.filter(doesCategoryMatchFilter)
  }
  else{
    data = data.filter(onlyTopLevelCategories)
  }

  let selectedCategories = categoriesService.categories
  .filter(c => selectedCategoryIds.includes(c.id))

  return <>
  
    {label ? <label>{label}:</label> : ''}
    <category-selector>
      <input className='categories-filter'
        placeholder='filter...' onChange={e => setCategoryFilter(e.target.value.toLocaleLowerCase())} />
        
        <CategoriesList_Partial {...{categories: selectedCategories, selectedCategoryIds, onCategorySelected, isFiltering: null}} type={'selected'} />

        <CategoriesList_Partial {...{categories: data, selectedCategoryIds, onCategorySelected, isFiltering: categoryFilter}} />

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
    return  category.value.toLocaleLowerCase().includes(categoryFilter)
  }

  function onlyTopLevelCategories(category: Category_Object){
    return !category.parentCategoryIds?.length
  }
}

export default observer(CategorySelector_Partial)

