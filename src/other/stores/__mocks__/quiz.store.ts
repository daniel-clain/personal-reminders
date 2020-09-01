import { observable } from 'mobx'

const quizStore = observable({
  selectedCategoryIds: []
})

export default quizStore
