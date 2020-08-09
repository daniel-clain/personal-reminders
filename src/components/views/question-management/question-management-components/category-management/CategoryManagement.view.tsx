import React from 'react'
import CategoryForm_Sub from './category-management-components/CategoryForm.sub'
import CategoryList_Sub from './category-management-components/Categorylist.sub'


export default function CategoryManagement_View(){
  return (
    <main id='category-management'>
      <CategoryForm_Sub  />
      <hr />
      <CategoryList_Sub />
    </main>
  )
}
