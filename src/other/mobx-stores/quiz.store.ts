import { observable, action } from 'mobx'
import { Category_Type } from '../types/category.type'
import { Quiz_Type } from '../types/quiz.type'
import { generateQuiz } from '../services/quiz-generator.service'
import { CorrectnessMark_Type } from '../types/correctness-mark.type'
import { IQuestionStore } from './question.store'



export function QuizStore(questionStore: IQuestionStore){

  const quizState: QuizState_Interface = observable({
    activeQuiz: null,
    quizInProgress: false,
    answerSubmitted: false,
    correctnessMarkSubmitted: false,
    activeQuestionIndex: null,
    inputAnswer: '',
    selectedCategories: []
  })
  return {
    quizState: observable(quizState),
    categorySelected: action(categorySelected),
    startQuiz: action(startQuiz),
    submitQuestion: action(submitQuestion),
    submitCorrectnessMark: action(submitCorrectnessMark),
    nextQuestion: action(nextQuestion),
  }
  function startQuiz() {
    quizState.activeQuiz = generateQuiz(questionStore)
    quizState.quizInProgress = true
    quizState.activeQuestionIndex = 0
  }

  function submitQuestion() {
    quizState.answerSubmitted = true
  }

  function submitCorrectnessMark(correctnessMark: CorrectnessMark_Type) {
    quizState.correctnessMarkSubmitted = true
    const { activeQuiz, activeQuestionIndex } = quizState
    const question = activeQuiz.questions[activeQuestionIndex]
    questionStore.updateQuestionCorrectnessRating(question, 2)
  }


  function categorySelected(selectedCategory: Category_Type) {
    const categoryIndex = quizState.selectedCategories.findIndex(category => category.id == selectedCategory.id)
    const categoryIsAlreadySelected = categoryIndex >= 0
    if (categoryIsAlreadySelected)
      quizState.selectedCategories.splice(categoryIndex, 1)
    else
      quizState.selectedCategories.push(selectedCategory)
  }

  function nextQuestion() {

    const { activeQuiz, activeQuestionIndex } = quizState

    if (activeQuiz.questions.length == activeQuestionIndex + 1) {
      finishQuiz()
    }
    else {
      resetQuestionState()
      quizState.activeQuestionIndex++
    }
  }

  function finishQuiz() {
    resetQuestionState()
    quizState.quizInProgress = false
    quizState.activeQuiz = null
    quizState.activeQuestionIndex = null
    quizState.selectedCategories = []

  }

  function resetQuestionState() {
    quizState.inputAnswer = ''
    quizState.answerSubmitted = false
    quizState.correctnessMarkSubmitted = false
  }
}


interface QuizState_Interface {
  activeQuiz: Quiz_Type
  quizInProgress: boolean,
  answerSubmitted: boolean,
  correctnessMarkSubmitted: boolean,
  activeQuestionIndex: number,
  inputAnswer: string,
  selectedCategories: Category_Type[]
}

/* Quiz Actions */

