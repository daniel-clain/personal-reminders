import React from 'react'
import tagStore from '../../other/mobx-stores/tag.store'
import { Tag } from '../../other/types/tag.type'
import { observer } from 'mobx-react'

interface TagSelectorProps_Interface {
  selectedTags: Tag[]
  tagSelected: (tag: Tag) => void
}

function TagSelector_Partial({ selectedTags, tagSelected }: TagSelectorProps_Interface) {
  const { tags } = tagStore

  return <div className='tag-selector'>
    {tags.map(tag =>
      <button key={tag.id}
        style={
          selectedTags.some(t => t.id == tag.id) ?
          { backgroundColor: 'blue' } : {backgroundColor: 'red'}
        }
        onClick={() => tagSelected(tag)}
      >
        {tag.value}
      </button>
    )}
  </div>
}

export default observer(TagSelector_Partial)
