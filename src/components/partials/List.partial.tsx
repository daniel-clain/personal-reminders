import React, { useState } from 'react'
import { show } from '../../other/services/utilities.service'
import CategoryForm_Sub from '../views/category-management/category-management-components/CategoryForm_Sub'
import QuestionForm_Sub from '../views/question-management/question-management-components/QuestionForm.sub'
import { Question_Object } from '../../other/object-models/question.object'
import { Category_Object } from '../../other/object-models/category.object'
import { DataTypes_Set } from '../../other/sets/data-types.set'

import categoriesService from '../../other/services/categories.service'
import Data_Object from '../../other/object-models/data.object'
import questionsService from '../../other/services/questions.service'
import { observer } from 'mobx-react'

interface ListProps{
  type: DataTypes_Set
}

const List_Partial = ({type}: ListProps) => {  
  const [filter, setfilter] = useState('')
  const [expandedItemId, setExpandedItemId] = useState(null)
  const data: Data_Object[] = 
    type == 'Question' ? questionsService.questions :
    type == 'Category' ? categoriesService.categories : null
    
  return <>
    <input className='list-filter' placeholder='filter...' onChange={e => setfilter(e.target.value.toLocaleLowerCase())}/>

    {data
    .map((dataItem, i) =>
      <list-item 
        key={i} 
        {...
          dataItem.id == expandedItemId 
          ? {expanded: ''}
          : {onClick: () => setExpandedItemId(dataItem.id)}
        }
        {...
          dataItem.value.toLocaleLowerCase()
          .includes(filter) == false && dataItem.id != expandedItemId ? {'filtered-out': ''} : ''
        }
      >
        {show(
          dataItem.value
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
}

export default observer(List_Partial)
