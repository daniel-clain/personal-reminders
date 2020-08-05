import React, { useState } from "react"
import FormField from "../../../../partials/FormField"
import { EditedTag } from "../../../../../other/types/edited-tag.type"
import tagStoreSingleton from "../../../../../other/mobx-stores/tag.store"


export type TagFields = 'tag name'

export default function TagForm(){

  const [editingTag, setEditingTag] = useState({tagName: ''}) 
  const {tagName} = editingTag
  
  return (
    <div className="add-tag">
      <h2>Add Tag</h2>
      <FormField 
        name='tag name' 
        type='input'
        onUpdate={handleFieldUpdate} 
        value={tagName}
      />
      <button onClick={submitTag}>Submit New Tag</button>
    </div>
  )

  function handleFieldUpdate(field: TagFields, value: any){
    if(field === 'tag name')
      setEditingTag({tagName: value})
  }

  function submitTag(){
    const newTag: EditedTag = {
      value: this.state.tagName
    }
    tagStoreSingleton.addTag(newTag)
    this.setState({tagName: ''})
  }
}