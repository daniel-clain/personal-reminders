import React, { Component } from 'react';
import { Tag } from '../../types/tag.type';
import { Question } from '../../types/question.type';
export default class EditDeleteItem extends Component<
  {item: Question | Tag},
  {expanded: boolean}
>{

  constructor(params) {
    super(params)
    this.state = {
      expanded: false
    }
  }
  submitUpdatedItem(){}
  expandItem(){
    this.setState({expanded: true})
  }
  closeItem(){
    this.setState({expanded: false})
  }
  deleteItem(){}

  render(){
    const {item} = this.props
    return (
      <div>
        {this.state.expanded ? (
        <div>
          {this.props.children}       
          <button type="button" onClick={() => this.closeItem()}>Close</button>
          <button onClick={() => this.deleteItem()}> Delete</button >
        </div>
        ) : (
          <div className="list__item" onClick={() => this.expandItem()}>
          { item.value }
        </div>
        )}
      </div>
    )
  }
};
