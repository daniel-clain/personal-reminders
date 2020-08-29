import { observable } from "mobx";
import { Question_Type } from "../types/question.type";
import dataService from "../services/data.service";

const questionStore = observable({
  questions: <Question_Type[]> [],
  addQuestion: (question: Question_Type) => dataService.add('Questions', question),
  updateQuestion: (question: Question_Type) => dataService.update('Questions',question),
  deleteQuestion: questionId => dataService.deleteData('Questions', questionId)
})

dataService.data$('Questions', (q: Question_Type[]) => questionStore.questions = q)

export default questionStore
window['questionStore'] = questionStore


