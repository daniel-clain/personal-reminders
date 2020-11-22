import React, { useState } from 'react'
import { createPropsObj, show } from '../../other/services/utilities.service'
import CategoryForm_Sub from '../views/category-management/category-management-components/CategoryForm_Sub'
import QuestionForm_Sub from '../views/question-management/question-management-components/QuestionForm.sub'
import { Question_Object } from '../../other/object-models/question.object'
import { Category_Object } from '../../other/object-models/category.object'
import { DataTypes_Set } from '../../other/sets/data-types.set'

import categoriesService from '../../other/services/categories.service'
import Data_Object from '../../other/object-models/data.object'
import questionsService from '../../other/services/questions.service'
import { observer } from 'mobx-react'
import quizService from '../../other/services/quiz.service'
import CategorySelector_Partial from './CategorySelector.partial'

interface ListProps{
  type: DataTypes_Set
}

const List_Partial = ({type}: ListProps) => {  
  
  const [filter, setfilter] = useState({value: null, categoryIds: null})

  const [expandedItemId, setExpandedItemId] = useState(null)
  const data: Data_Object[] = 
    type == 'Question' ? questionsService.questions :
    type == 'Category' ? categoriesService.categories : null
    
  return <>
    <input className='list-filter' placeholder='filter...' onChange={e => setfilter({...filter, value: e.target.value.toLocaleLowerCase()})}/>

    <CategorySelector_Partial {...{
      label: 'filter category',
      value: filter.categoryIds,
      onChange: categoryIds => setfilter({...filter, categoryIds})
    }} />

    {data
    .map((dataItem, i) =>
      <list-item {...getListItemProps(dataItem, i)}>
        {show(
          <item-excerpt>
            {dataItem.value}
          </item-excerpt>
        ).if(dataItem.id != expandedItemId)}
        
        {show(<>
          <button className='collapse' onClick={setExpandedItemId}>Collapse</button>
          {show(
            <QuestionForm_Sub 
              editedQuestion={dataItem as Question_Object}
              onUpdate={() => setExpandedItemId(null)}
            />
          ).if(type == 'Question')}
          {show(
            <CategoryForm_Sub 
              editedCategory={dataItem as Category_Object}
              onUpdate={() => setExpandedItemId(null)}
            />
          ).if(type == 'Category')}
        </>).if(dataItem.id == expandedItemId)}
      </list-item>
    )}
  </>

  function getListItemProps(dataItem, i){
    return createPropsObj([
      {prop: {key: i}},
      {
        prop: 'expanded',
        condition: expandedItemId == dataItem.id,
        elseProp: {'onClick': () => setExpandedItemId(dataItem.id)}
      },
      {
        prop: 'filtered-out',
        condition: (() => {      
          if(expandedItemId == dataItem.id) return false
          if(
            filteredOutByCatgegory() || 
            filteredOutByValue()
          ) return true 
          return false
        })()
      }
    ])

    function filteredOutByCatgegory(){

      if(!(filter.categoryIds?.length)) return

      if(type == 'Question'){
        const question = dataItem as Question_Object
        const questionDoesntHaveCategoriesInTheFilter = 
          !question.categoryIds.some(cid =>
            filter.categoryIds.includes(cid)
          )
        if(questionDoesntHaveCategoriesInTheFilter)
          return true
      }
    }
    function filteredOutByValue(){
      if (!filter.value) return false
      const filterValueIsInDataValue = dataItem.value.toLocaleLowerCase()
      .includes(filter.value.toLocaleLowerCase())

      return filterValueIsInDataValue
      
    }
/* 
    const lowerValue = dataItem.value.toLocaleLowerCase()
    const dataAsQuestion = dataItem as Question_Object

    if(!expandedItemId) return

      expandedItemId != dataItem.id &&
      (
        !lowerValue.includes(filter.value) ||
        (
          type == 'Question' && 
          !filter.categoryIds.some(cid => 
            dataAsQuestion.categoryIds.includes(cid)
          )
        )
      ) && 
      
    ){
      props['filtered-out'] = true
    } */
  
  }
}

export default observer(List_Partial)
