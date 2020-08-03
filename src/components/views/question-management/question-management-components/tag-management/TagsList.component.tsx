import React from "react";
import {observer} from 'mobx-react';
import tagStoreSingleton from "../../../../../mobx-stores/tag.store";


export default observer(function TagsList(){
  return (
    <div className="tag-list">
      <div>Questions</div>
      {tagStoreSingleton.tags.map((tag, i) =>
        <div key={i}>
          Tag Name: {tag.value}
        </div>
      )}
    </div>
  )
})