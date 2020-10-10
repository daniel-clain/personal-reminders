import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Category_Object } from '../../other/object-models/category.object'
import { observer } from 'mobx-react'
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
  const [haveFadedOut, setHaveFadedOut] = useState(false)


  document.addEventListener('animationend', ({animationName, target}: any) => {

    if(animationName == 'fade-out-to-left'){
      target.setAttribute('is-hidden', '')
      target.removeAttribute('class')
      setHaveFadedOut(true)
    }
    if(animationName == 'fade-in-from-left'){
      target.removeAttribute('fading-in')
    }
    
    if(animationName == 'pop-in'){
      target.classList.remove('popping-in')
    }

  })


  const categoriesContent = categories.map((category): JSX.Element => 
    
    <category-tag  
      {...
        selectedCategoryIds?.some(id => id == category.id) ? 
        {selected:''} : ''
      }     
      {...
        expandedCategory && expandedCategory.id != category.id ? 
        {'fading-out': ''} : ''
      }  
      {...
        expandedCategory?.id == category.id && haveFadedOut  ? 
        {'is-expanded': ''} : ''
      } 
      key={category.id}    
      onClick={() => onCategorySelected(category)}
    >

      {show(
        <parent-categories onClick={() => parentIdsSelected(category)}>
          {category.parentCategoryIds?.length}
        </parent-categories>
      ).if(type != 'selected' && category.parentCategoryIds?.length > 0)}

      {category.value}
      
      {show(
        <child-categories onClick={!isFiltering ? (e => childIdsSelected(e, category)) : null}>
          {category.childCategoryIds?.length}
        </child-categories>
      ).if(type != 'selected' && category.childCategoryIds?.length > 0)}
      
    </category-tag>
  )

  return <>
    <categories-container
      {...parentCategory ? {name: `For ${parentCategory.value}`} : ''} 
    >
      {categoriesContent}      
    
    </categories-container>

    {expandedCategory && haveFadedOut ?
      <expanded-category-wrapper
        class='popping-in'
        key={`${parentCategory?.id}-${expandedCategory.id}`}
      >
        
        <CategoriesList_Partial 
          {...
            {
              onCategorySelected, 
              selectedCategoryIds, 
              isFiltering, 
              categories: categoriesService.categories
                .filter(d => d.parentCategoryIds?.includes(expandedCategory.id)),
              parentCategory: expandedCategory
            }
          } 
        />          
      </expanded-category-wrapper> : ''
    }
  </>  

  function parentIdsSelected(category: Category_Object){

  }
  function childIdsSelected(event, category: Category_Object){
    event.stopPropagation() 
    if(!expandedCategory){
      setHaveFadedOut(false)
      setExpandedCategory(category)
    }
    else{
      setExpandedCategory(null)

      event.target.closest('categories-container')
      .querySelectorAll('category-tag')
      .forEach(categoryTag => (
        !categoryTag.hasAttribute('is-expanded') ? 
          categoryTag.setAttribute('fading-in', '') : '',
        categoryTag.removeAttribute('is-hidden')
      ))
    }
  }

}

export default observer(CategoriesList_Partial)

