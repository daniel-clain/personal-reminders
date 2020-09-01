import { observable } from 'mobx'
import { generateQuiz } from '../services/quiz-generator.service'
import { CorrectnessMark_Set } from '../sets/correctness-mark.set'

const quizStore = observable({
  activeQuiz: null,
  quizInProgress: false,
  answerSubmitted: false,
  correctnessMarkSubmitted: null,
  activeQuestionIndex: null,
  inputAnswer: '',
  selectedCategoryIds: [],
  startQuiz,
  submitQuestion,
  submitCorrectnessMark,
  nextQuestion,
  finishQuiz,
})

export default quizStore
window['quizStore'] = quizStore

function startQuiz() {
  try{
    quizStore.activeQuiz = generateQuiz()
    quizStore.quizInProgress = true
    quizStore.activeQuestionIndex = 0
  }
  catch (e){
    console.error(e)
    alert(e)
  }
}

function submitQuestion() {
  quizStore.answerSubmitted = true
}

function submitCorrectnessMark(correctnessMark: CorrectnessMark_Set) {
  quizStore.correctnessMarkSubmitted = correctnessMark
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
  quizStore.selectedCategoryIds = []

}

function resetQuestionState() {
  quizStore.inputAnswer = ''
  quizStore.answerSubmitted = false
  quizStore.correctnessMarkSubmitted = false
}
