import React from 'react';
import TagsList from './TagsList.component';
import TagForm from './TagForm.component';


export default function TagManagement(){
  return (
    <div>
      <TagForm  />
      <hr />
      <TagsList />
    </div>
  )
}
