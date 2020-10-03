import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
import { FormFieldProps_Interface } from './Form.partial';
import categoriesService from '../../other/services/categories.service';
import { show } from '../../other/services/utilities.service';

interface CategoriesListProps_Interface{
  selectedCategoryIds?: string[]
  categories?: Category_Object[]
  onCategorySelected(Category_Object): void
}

const CategoriesList_Partial = ({onCategorySelected, categories, selectedCategoryIds}: CategoriesListProps_Interface) => {
  const [expandedCategories, setExpandedCategories] = useState([])

  return <>
  
    {categories
    .map(category => <>

      <category-tag         
        {...
          selectedCategoryIds?.some(id => id == category.id) ? {selected:''} : 
          expandedCategories?.some(id => id == category.id) ? {expanded:''} : 
          category.childCategoryIds.length ? {'has-children':''} : ''
        }
        onClick={() => onCategorySelected(category)}
        key={category.id}
      >
        {show(
          <span onClick={() => parentIdsSeleccted(category)}>
            ({category.parentCategoryIds.length})
          </span>
        ).if(category.parentCategoryIds.length > 0)}

        {category.value}
        
        {show(
          <span onClick={e => childIdsSeleccted(e, category)}>
            ({category.childCategoryIds.length})
          </span>
        ).if(category.childCategoryIds.length > 0 && !expandedCategories?.some(id => id == category.id))}
      </category-tag>
      {show(
        <CategoriesList_Partial {...
          {onCategorySelected, selectedCategoryIds, categories: categoriesService.categories.filter(d => d.parentCategoryIds.includes(category.id))}
        } />
      ).if(expandedCategories?.some(id => id == category.id))}


    </>)}
  </>

  function parentIdsSeleccted(category: Category_Object){

  }
  function childIdsSeleccted(e, category: Category_Object){
    e.stopPropagation()
    if(expandedCategories?.some(id => category.id)){
      setExpandedCategories([...expandedCategories.filter(id => id != category.id)])
    }
    else{
      setExpandedCategories([...expandedCategories, category.id])
    }
  }

}

export default observer(CategoriesList_Partial)

