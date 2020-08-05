import { observable, action } from 'mobx';
import { Question } from '../types/question.type';
import { Tag } from '../types/tag.type';

interface QuizState_Interface {
  quizInProgress: boolean,
  answerSubmitted: boolean,
  correctnessRecorded: boolean,
  activeQuestion: Question,
}

function QuizStore() {
  const quizState: QuizState_Interface = observable({
    quizInProgress: false,
    answerSubmitted: false,
    correctnessRecorded: false,
    activeQuestion: null,
  })

  const selectedTags: Tag[] = observable([])

  const tagSelected = action((selectedTag: Tag) => {
    console.log('ding')
    const tagIndex = selectedTags.findIndex(tag => tag.id == selectedTag.id)
    const tagIsAlreadySelected = tagIndex >= 0
    if (tagIsAlreadySelected)
      selectedTags.splice(tagIndex, 1)
    else
      selectedTags.push(selectedTag)
  })

  return {
    quizState,
    selectedTags,
    tagSelected
  }

}
const quizStoreSingleton = QuizStore()
export default quizStoreSingleton