import { observable } from 'mobx'
import { generateQuiz } from '../services/quiz-generator.service'
import { CorrectnessMark_Type } from '../sets/correctness-mark.set'

const quizService = observable({
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

export default quizService


function startQuiz() {
  try{
    quizService.activeQuiz = generateQuiz()
    quizService.quizInProgress = true
    quizService.activeQuestionIndex = 0
  }
  catch (e){
    console.error(e)
    alert(e)
  }
}

function submitQuestion() {
  quizService.answerSubmitted = true
}

function submitCorrectnessMark(correctnessMark: CorrectnessMark_Type) {
  quizService.correctnessMarkSubmitted = correctnessMark
}


function nextQuestion() {
  const { activeQuiz, activeQuestionIndex } = quizService
  const question = activeQuiz.questions[activeQuestionIndex]
  //questionStore.updateQuestionCorrectnessRating(question, correctnessMark)


  if (activeQuiz.questions.length == activeQuestionIndex + 1) {
    finishQuiz()
  }
  else {
    resetQuestionState()
    quizService.activeQuestionIndex++
  }
}

function finishQuiz() {
  resetQuestionState()
  quizService.quizInProgress = false
  quizService.activeQuiz = null
  quizService.activeQuestionIndex = null
  quizService.selectedCategoryIds = []

}

function resetQuestionState() {
  quizService.inputAnswer = ''
  quizService.answerSubmitted = false
  quizService.correctnessMarkSubmitted = false
}

