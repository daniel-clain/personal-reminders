import React, { useState } from 'react'
import { createPropsObj, show } from '../../other/services/utilities.service'
import CategoryForm_Sub from '../views/category-management/category-management-components/CategoryForm_Sub'
import ReminderForm_Sub from '../views/reminder-management/reminder-management-components/ReminderForm.sub'
import { Reminder_Object } from '../../other/object-models/reminder.object'
import { Category_Object } from '../../other/object-models/category.object'
import { DataTypes_Set } from '../../other/sets/data-types.set'

import categoriesService from '../../other/services/categories.service'
import Data_Object from '../../other/object-models/data.object'
import remindersService from '../../other/services/reminders.service'
import { observer } from 'mobx-react'
import CategorySelector_Partial from './CategorySelector.partial'

interface ListProps{
  type: DataTypes_Set
}

const List_Partial = ({type}: ListProps) => {  
  
  const [filter, setfilter] = useState({
    value: null as string, 
    categoryIds: null as string[],
    quesWithNoCategory: false
  })

  const [expandedItemId, setExpandedItemId] = useState(null)
  const data: Data_Object[] = 
    type == 'Reminder' ? remindersService.reminders :
    type == 'Category' ? categoriesService.categories : null
    
  return <>
    <filter-tools>
      {show(
        <label className='no-category-checkbox'>
          Show reminders with no category
          <input
            type='checkbox'
            onChange={e => setfilter({...filter, quesWithNoCategory: e.target.checked})}
          />
        </label>
      ).if(type == 'Reminder')}
      <input 
        className='list-filter' 
        placeholder='filter...' 
        onChange={e => setfilter({...filter, value: e.target.value.toLocaleLowerCase()})}
      />
    </filter-tools>
    

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
            <ReminderForm_Sub 
              editedReminder={dataItem as Reminder_Object}
              onUpdate={() => setExpandedItemId(null)}
            />
          ).if(type == 'Reminder')}
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
          if(type == 'Reminder'){
            const reminder = dataItem as Reminder_Object
            if(filter.quesWithNoCategory) 
              return reminder.categoryIds.length != 0
          }
          
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

      if(type == 'Reminder'){
        const reminder = dataItem as Reminder_Object
        const reminderDoesntHaveCategoriesInTheFilter = 
          !reminder.categoryIds.some(cid =>
            filter.categoryIds.includes(cid)
          )
        if(reminderDoesntHaveCategoriesInTheFilter)
          return true
      }
    }
    function filteredOutByValue(){
      if (!filter.value) return false
      const filterValueIsInDataValue = dataItem.value.toLocaleLowerCase()
      .includes(filter.value.toLocaleLowerCase())

      return !filterValueIsInDataValue
      
    }
  }
}

export default observer(List_Partial)
