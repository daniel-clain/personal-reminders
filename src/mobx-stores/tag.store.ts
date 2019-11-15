import {observable} from 'mobx';
import { Tag } from '../types/tag.type';
import { SubmittedTag } from '../types/submitted-tag';

export class TagStore{
  @observable tags: Tag[] = [{value: 'tag1', dateLastUpdated: new Date()}]
  
  addTag({value}: SubmittedTag){
    const tag: Tag = {
      id: null,
      value,
      dateLastUpdated: new Date()
    }
    this.tags.push(tag)
  }
}
const tagStoreSingleton = new TagStore()

export default tagStoreSingleton