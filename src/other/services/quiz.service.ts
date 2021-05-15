import { observable } from 'mobx'
import { Question_Object } from '../object-models/question.object'
import { Quiz_Object } from '../object-models/quiz.object'
import { generateQuiz } from '../services/quiz-generator.service'
import { CorrectnessMark_Type, CorrectnessRatings_Enum, maxRating } from '../sets/correctness-mark.set'
import questionsService from './questions.service'

const quizService = observable({
  activeQuiz: <Quiz_Object>null,
  quizInProgress: false,
  answerSubmitted: false,
  correctnessMarkSubmitted: <CorrectnessMark_Type>null,
  activeQuestionIndex: null,
  inputAnswer: '',
  selectedCategoryIds: [],
  startQuiz,
  submitQuestion,
  submitCorrectnessMark,
  nextQuestion,
  finishQuiz,
  skipQuestion
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

function skipQuestion(){
  const { activeQuiz, activeQuestionIndex } = quizService
  if (activeQuiz.questions.length == activeQuestionIndex + 1) {
    finishQuiz()
  }
  else {
    resetQuestionState()
    quizService.activeQuestionIndex++
  }
}



function nextQuestion(activeQuestion: Question_Object,) {
  const { activeQuiz, activeQuestionIndex, correctnessMarkSubmitted } = quizService
  
  if(!correctnessMarkSubmitted){
    alert('You must select a correctness mark')
    return
  }

  updateQuestionCorrectnessRating(activeQuestion, correctnessMarkSubmitted)


  if (activeQuiz.questions.length == activeQuestionIndex + 1) {
    finishQuiz()
  }
  else {
    resetQuestionState()
    quizService.activeQuestionIndex++
  }
}

function updateQuestionCorrectnessRating(question: Question_Object, correctnessMark: CorrectnessMark_Type){

  if(!correctnessMark) throw('Correctness Mark invalid')

  const markRating = CorrectnessRatings_Enum[correctnessMark]
  const currentRating = question.correctnessRating || 2
  
  
  let newCorrectnessRating = 
    currentRating + markRating < 0 ? 0 :
    currentRating + markRating > maxRating ? maxRating :
    currentRating + markRating


  questionsService.updateQuestion({
    ...question,
    correctnessRating: newCorrectnessRating
  })
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
  quizService.correctnessMarkSubmitted = null
}

