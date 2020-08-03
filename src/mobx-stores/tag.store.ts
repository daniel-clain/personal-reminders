import {observable} from 'mobx';
import { Tag } from '../types/tag.type';
import { EditedTag } from '../types/edited-tag.type';

function TagStore(){
  const tags: Tag[] = observable([{value: 'tag1', dateLastUpdated: new Date()}])

  return {
    tags,
    addTag
  }
  
  function addTag({value}: EditedTag){
    const tag: Tag = {
      id: null,
      value,
      dateLastUpdated: new Date()
    }
    this.tags.push(tag)
  }

}
const tagStoreSingleton = TagStore()

export default tagStoreSingleton