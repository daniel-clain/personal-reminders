import {observable} from 'mobx';
import { Tag } from '../types/tag.type';
import { EditedTag } from '../types/edited-tag.type';

function TagStore(){
  const tags: Tag[] = observable([{id: 't1', value: 'tag1', dateLastUpdated: new Date()}])

  addTag({value: 'balls'})
  setTimeout(() => {
    addTag({value: 'cunt'})
  }, 1000)
  setTimeout(() => {
    addTag({value: 'nigglet'})
  }, 1000)
   

  return {
    tags,
    addTag
  }
  
  function addTag({value}: EditedTag){
    const tag: Tag = {
      id: new Date().getTime().toString(),
      value,
      dateLastUpdated: new Date()
    }
    tags.push(tag)
  }

}
const tagStoreSingleton = TagStore()

export default tagStoreSingleton