import {observable} from 'mobx';
import { Question } from '../types/question.type';
import { SubmittedQuestion } from '../types/submitted-question.type';

export class QuestionStore{
  @observable questions: Question[] = [
    
  ]
  constructor(){
    this.addQuestion({
      value: 'What color is the sun?',
      correctAnswer: 'yellow',
      tags: [{value: 'practice questions', dateLastUpdated: new Date()}]
    })
  }

  validate(value, correctAnswer){
    const validationErrors = []
    if(!value) validationErrors.push('requires question')
    if(!correctAnswer) validationErrors.push('requires answer')
    if(validationErrors.length > 0)throw(validationErrors)
  }

  addQuestion({value, correctAnswer, tags}: SubmittedQuestion){
    this.validate(value, correctAnswer)
    // if validation doesnt throw
    const newQuestion: Question = {
      id: Math.random().toString(),
      value,
      correctAnswer,
      tags,
      dateLastUpdated: new Date(),
      dateLastAsked: null,
      correctnessRating: null,
    }
    this.questions.push(newQuestion)
  }

  updateQuestion(editingQuestion: Question, {value, correctAnswer, tags}: SubmittedQuestion){
    this.validate(value, correctAnswer)
    // if validation doesnt throw
    this.questions = this.questions.map(question => {
      if(question.id == editingQuestion.id){
        question.value = value
        question.correctAnswer = correctAnswer
        question.tags = tags
        question.dateLastUpdated = new Date()
      }
      return question
    })
  }
}
const questionStoreSingleton = new QuestionStore()

export default questionStoreSingleton