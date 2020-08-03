import {observable} from 'mobx';
import { Question } from '../types/question.type';
import { EditedQuestion } from '../types/edited-question.type';

interface IQuestionStore{
  questions: Question[]
  addQuestion(edditedQuestion: EditedQuestion)
  updateQuestion(questionId: string, edditedQuestion: EditedQuestion)
}

function QuestionStore(): IQuestionStore{
  const questions: Question[] = observable([])

  addQuestion({
    value: 'What color is the sun?',
    correctAnswer: 'yellow',
    tags: [{value: 'practice questions', dateLastUpdated: new Date()}]
  }) 


  function addQuestion(edditedQuestion: EditedQuestion){
      
    try{validate(edditedQuestion)} 
    catch(e){alert(`Add Failed. ${e}`)}

    const newQuestion: Question = {
      id: Math.random().toString(),
      ...edditedQuestion,
      dateLastUpdated: new Date(),
      dateLastAsked: null,
      correctnessRating: null,
    }
    questions.push(newQuestion)
  }

  function updateQuestion(questionId: string, edditedQuestion: EditedQuestion){
    try{validate(edditedQuestion)} 
    catch(e){alert(`Update Failed. ${e}`)}

    questions.find(question => {
      if(question.id == questionId){
        question = {
          ...question,
          ...edditedQuestion, 
          dateLastUpdated: new Date()
        }
        return true
      }
    })
  }
  
  function validate({value, correctAnswer}: EditedQuestion){
    const validationErrors = []
    if(!value) validationErrors.push('requires question')
    if(!correctAnswer) validationErrors.push('requires answer')
    if(validationErrors.length > 0)throw(validationErrors)
  }

  return {
    questions,
    addQuestion,
    updateQuestion
  }
}

const questionStoreSingleton = QuestionStore()
export default questionStoreSingleton