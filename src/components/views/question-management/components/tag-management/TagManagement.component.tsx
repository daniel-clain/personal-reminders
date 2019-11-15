import React, { Component } from 'react';
import { TagStore } from '../../../../../mobx-stores/tag.store';
import TagsList from './TagsList.component';
import TagForm from './TagForm.component';


export default class TagManagement extends Component<{
  tagStore: TagStore;
}>{
  
  render() {
    let { tagStore } = this.props
    return (
      <div>
        <TagForm tagStore={tagStore} />
        <hr />
        <TagsList tagStore={tagStore} />
      </div>
    )
  }
}
