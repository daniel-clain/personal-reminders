import React, { Component } from "react";
import { TagStore } from "../../../../../mobx-stores/tag.store";
import FormField from "../../../../partials/FormField";
import { SubmittedTag } from "../../../../../types/submitted-tag";

export type TagFields = 'tag name'

export default class TagForm extends Component<
 {tagStore: TagStore}, any>{

  constructor(props) {
    super(props)
    this.state = {
      tagName: ''
    }
  }
  
  handleFieldUpdate(field: TagFields, value: any){
    if(field === 'tag name')
    this.setState({tagName: value})
  }

  submitTag(){
    const newTag: SubmittedTag = {
      value: this.state.tagName
    }
    this.props.tagStore.addTag(newTag)
    this.setState({tagName: ''})
  }

  render() {
    const {tagName} = this.state
    let handleFieldUpdate = this.handleFieldUpdate.bind(this)
    return (
      <div className="add-tag">
        <h2>Add Tag</h2>
        <FormField 
          name='tag name' 
          type='input'
          onUpdate={handleFieldUpdate} 
          value={tagName}
        />
        <button onClick={this.submitTag.bind(this)}>Submit New Tag</button>
      </div>
    )
  }
}