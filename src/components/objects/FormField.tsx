import React, { Component } from "react";
import { QuestionFields } from "../views/question-management/question-management-components/QuestionForm.component";
import { TagFields } from "../views/question-management/question-management-components/tag-management/TagForm.component";
import { Tag } from "../../types/tag.type";
import {observer} from 'mobx-react';
import tagStoreSingleton from "../../mobx-stores/tag.store";

type FormFieldTypes = 'input' | 'textarea' | 'checkboxes'
type FieldNames = QuestionFields | TagFields

interface FormFieldProps {
  name: FieldNames
  type: FormFieldTypes
  onUpdate(name: FieldNames, value: any)
  value?: string
  tags?: Tag[]
}

@observer
export default class FormField extends Component<FormFieldProps, {}, any>{

  toggleTag(toggledTag: Tag){
    const {tags, name, onUpdate} = this.props
    
    const tagIndex: number = tags.findIndex(tag => toggledTag.value == tag.value)
    tagIndex >= 0 ? 
      tags.splice(tagIndex, 1)
      :
      tags.push(toggledTag)
    onUpdate(name, tags)
  }
  render() {
    const { name, type, onUpdate, value, tags } = this.props
    let elem: JSX.Element
    switch (type) {
      case 'input':
        elem = <input
          onChange={e => onUpdate(name, e.target.value)}
          value={value}
          className="field__input"
        />
        break
      case 'textarea':
        elem = <textarea
          onChange={e => onUpdate(name, e.target.value)}
          value={value}
          className="field__text-area field__input"
        />
        break
      case 'checkboxes':
        elem = <div className="field__checkboxes">
        {tagStoreSingleton.tags.map((tag: Tag, i) => (              
          <label key={i}>
            <input 
              type="checkbox" 
              checked={tags.some((questionTag: Tag) => questionTag.value == tag.value)}
              onChange={() => this.toggleTag(tag)} 
            /> 
            {tag.value}
          </label>
        ))}
      </div>
        break
    }
    return (
      <div className="field">
        <span className="field__name">{name}: </span>
        {elem}
      </div>
    )
  }
}

