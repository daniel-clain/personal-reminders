import { observable } from 'mobx'
import { Category_Type } from '../types/category.type'
import { generateQuiz } from '../services/quiz-generator.service'
import { CorrectnessMark_Type } from '../types/correctness-mark.type'

const quizStore = observable({
  activeQuiz: null,
  quizInProgress: false,
  answerSubmitted: false,
  correctnessMarkSubmitted: null,
  activeQuestionIndex: null,
  inputAnswer: '',
  selectedCategories: [],
  startQuiz,
  submitQuestion,
  submitCorrectnessMark,
  categorySelected,
  nextQuestion,
  finishQuiz,
})

export default quizStore
window['quizStore'] = quizStore

function startQuiz() {
  quizStore.activeQuiz = generateQuiz()
  quizStore.quizInProgress = true
  quizStore.activeQuestionIndex = 0
}

function submitQuestion() {
  quizStore.answerSubmitted = true
}

function submitCorrectnessMark(correctnessMark: CorrectnessMark_Type) {
  quizStore.correctnessMarkSubmitted = correctnessMark
}


function categorySelected(selectedCategory: Category_Type) {
  const categoryIndex = quizStore.selectedCategories.findIndex(category => category.id == selectedCategory.id)
  const categoryIsAlreadySelected = categoryIndex >= 0
  if (categoryIsAlreadySelected)
  quizStore.selectedCategories.splice(categoryIndex, 1)
  else
  quizStore.selectedCategories.push(selectedCategory)
}

function nextQuestion() {
  const { activeQuiz, activeQuestionIndex } = quizStore
  const question = activeQuiz.questions[activeQuestionIndex]
  //questionStore.updateQuestionCorrectnessRating(question, correctnessMark)


  if (activeQuiz.questions.length == activeQuestionIndex + 1) {
    finishQuiz()
  }
  else {
    resetQuestionState()
    quizStore.activeQuestionIndex++
  }
}

function finishQuiz() {
  resetQuestionState()
  quizStore.quizInProgress = false
  quizStore.activeQuiz = null
  quizStore.activeQuestionIndex = null
  quizStore.selectedCategories = []

}

function resetQuestionState() {
  quizStore.inputAnswer = ''
  quizStore.answerSubmitted = false
  quizStore.correctnessMarkSubmitted = false
}
