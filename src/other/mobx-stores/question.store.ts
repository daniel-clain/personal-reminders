import { observable, action } from 'mobx'
import { Question_Type } from '../types/question.type'
import { EditedQuestion_Type } from '../types/edited-question.type'
import stubQuestions from './stub-questions'
import { SubmittedQuestion_Type } from '../types/submitted-question.type'
import { CorrectnessMark_Type } from '../types/correctness-mark.type'
import { Collection } from '../interfaces/collection.interface'


export interface IQuestionStore {
  questions: Question_Type[]
  addQuestion(submittedQuestion: SubmittedQuestion_Type)
  updateQuestion(editedQuestion: EditedQuestion_Type)
  deleteQuestion(id: string)
  updateQuestionCorrectnessRating(quesiton: Question_Type, correctnessRating: number)
  setCollection
}
export function QuestionStore(): IQuestionStore {
  let questionCollection: Collection

  const sqs: Question_Type[] = stubQuestions.map(sq => ({
    ...sq,
    correctnessRating: 2,
    dateLastAsked: new Date(sq.dateLastAsked),
    dateLastUpdated: new Date(sq.dateLastUpdated)
  }))

  let questions: Question_Type[] = observable([])


  function addQuestion(submittedQuestion: SubmittedQuestion_Type) {

    if(!questionCollection)throw('no question collection')
    try { validate(submittedQuestion) }
    catch (e) { alert(`Add Failed. ${e}`) }
    
    return questionCollection.add({
      ...submittedQuestion,
      dateLastUpdated: new Date(),
      dateLastAsked: null,
      correctnessRating: null,
    })
  }

  function updateQuestion(editedQuestion: EditedQuestion_Type) {
    if(!questionCollection)throw('no question collection')
    const { id, ...submittedQuestion } = editedQuestion
    try { validate(submittedQuestion) }
    catch (e) { alert(`Update Failed. ${e}`) }
    questionCollection.doc(id).update({...submittedQuestion})
  }

  function deleteQuestion(questionId: string) {
    if(!questionCollection)throw('no question collection')
    questionCollection.doc(questionId).delete()
  }

  function validate({ value, correctAnswer }: SubmittedQuestion_Type) {
    const validationErrors = []
    if (!value) validationErrors.push('requires question')
    if (!correctAnswer) validationErrors.push('requires answer')
    if (validationErrors.length > 0) throw (validationErrors)
  }

  function updateQuestionCorrectnessRating(question: Question_Type, correctnessRating: number) {
    if(!questionCollection)throw('no question collection')
    const { id, ...data } = question
    questionCollection.doc(id).update({...data, correctnessRating})
  }

  function setCollection(collection: Collection) {
    questionCollection = collection;

    /* const zxy = sqs.filter(sq => sq.categoryIds.includes('Z3l5qLbLpyFRJ1JGwzAp'))

    zxy.forEach(async sq => {
      const {id, ...rest} = sq
      //await addQuestion({...rest, categoryIds: ['uqb8AeMwKGQCLpj88fk4']})
      console.log('added', sq.value)
    }) */
    questionCollection.onSnapshot(snapshot => {
      questions.splice(0, questions.length,
        ...snapshot.docs.map(doc => (
          <Question_Type>{ ...doc.data(), id: doc.id }
        ))
      )
    })
    
    

  }

  return {
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    updateQuestionCorrectnessRating: action(updateQuestionCorrectnessRating),
    setCollection
  }

}
