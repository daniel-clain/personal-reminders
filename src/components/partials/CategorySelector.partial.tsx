import React, { useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
import categoriesService from '../../other/services/categories.service';
import { show } from '../../other/services/utilities.service';
import CategoriesList_Partial from './CategoriesList.partial';
import { FormFieldProps_Interface } from './TextField.partial';


const CategorySelector_Partial = ({label, value, onChange, editedCategory }: FormFieldProps_Interface<string[]>) => {
  const [categoryFilter, setCategoryFilter] = useState('')
  const selectedCategoryIds: string[] = value || []

  let data = categoriesService.categories
  if(categoryFilter){
    data =  data
    .filter(doesCategoryMatchFilter)
    .filter(excludeEditedCategory)
  }
  else{
    data = data
    .filter(onlyTopLevelCategories)
    .filter(excludeEditedCategory)
  }

  let selectedCategories = categoriesService.categories
  .filter(c => selectedCategoryIds.includes(c.id))
  .filter(excludeEditedCategory)

  return <>
  
    {label ? <label>{label}:</label> : ''}
    <category-selector>
      <input className='categories-filter'
        placeholder='filter...' onChange={e => setCategoryFilter(e.target.value.toLocaleLowerCase())} />

        
        {show(
          <CategoriesList_Partial 
            {...{
              categories: selectedCategories, 
              selectedCategoryIds, 
              onCategorySelected, 
              isFiltering: null
            }} 
            type={'selected'} 
          />
        ).if(selectedCategoryIds.length)}

        <CategoriesList_Partial {...{
          categories: data, 
          selectedCategoryIds, 
          onCategorySelected, 
          isFiltering: categoryFilter
          }} 
        />

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
    return !category.parentCategoryIds || category.parentCategoryIds.length == 0
  }
  function excludeEditedCategory(category: Category_Object){
    return !editedCategory || editedCategory.id != category.id
  }
}

export default observer(CategorySelector_Partial)

