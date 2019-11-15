import React, { Component } from "react";
import {observer} from 'mobx-react';
import { TagStore } from "../../../../../mobx-stores/tag.store";

@observer
export default class TagsList extends Component<{ tagStore: TagStore; }>{
  render() {
    const { tagStore } = this.props
    return (
      <div className="tag-list">
        <div>Questions</div>
        {tagStore.tags.map((tag, i) =>
          <div key={i}>
            Tag Name: {tag.value}
          </div>
        )}
      </div>
    )
  }
}