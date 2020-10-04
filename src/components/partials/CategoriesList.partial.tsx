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
  isFiltering: string
  parentCategory?: Category_Object
  type?: 'selected'
}

const CategoriesList_Partial = ({onCategorySelected, categories, selectedCategoryIds, isFiltering, parentCategory, type}: CategoriesListProps_Interface) => {
  const [expandedCategory, setExpandedCategory] = useState(null)


  document.addEventListener('animationend', (e: any) => 
    e.target.style.display = 'none'
  )

  return (

    <categories-container name={parentCategory ? `For ${parentCategory.value}` : ''} >
      {categories
      .map(category => 
        <category-wrapper
        {...
          !isFiltering && expandedCategory?.id == category.id ? 
          {expanded:''} : ''
        }
        {... 
          !isFiltering && expandedCategory && expandedCategory.id != category.id ? 
          {'is-hidden':''} : ''
        }
        key={`${parentCategory?.id}-${category.id}`}>

          <category-tag  
            {...
              selectedCategoryIds?.some(id => id == category.id) ? 
              {selected:''} : ''
            }       
            onClick={() => onCategorySelected(category)}
          >
            {show(
              <parent-categories onClick={() => parentIdsSelected(category)}>
                {category.parentCategoryIds.length}
              </parent-categories>
            ).if(type != 'selected' && category.parentCategoryIds.length > 0)}

            {category.value}
            
            {show(
              <child-categories onClick={!isFiltering ? (e => childIdsSelected(e, category)) : null}>
                {category.childCategoryIds.length}
              </child-categories>
            ).if(type != 'selected' && category.childCategoryIds.length > 0)}
          </category-tag>
            
          {show(
            <CategoriesList_Partial key={category.id}  {...
              {
                onCategorySelected, 
                selectedCategoryIds, 
                isFiltering, 
                categories: categoriesService.categories
                  .filter(d => d.parentCategoryIds.includes(category.id)),
                parentCategory: category
              }
            } />
          ).if(expandedCategory?.id == category.id)}

        </category-wrapper>
      )}
    </categories-container>
  )

  function parentIdsSelected(category: Category_Object){

  }
  function childIdsSelected(e, category: Category_Object){
    e.stopPropagation() 
    if(!expandedCategory){
      setExpandedCategory(category)
    }
    else{
      setExpandedCategory(null)
      const container = e.target.closest('categories-container')
      container.querySelectorAll('category-wrapper').forEach((tag: any) => tag.style.display = '')
    }
  }

}

export default observer(CategoriesList_Partial)

