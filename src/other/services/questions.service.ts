
import { observable } from "mobx";
import { Question_Object } from "../object-models/question.object";
import dataService from "./data.service";

const questionsService = observable({
  questions: <Question_Object[]>[],
  addQuestion: (question: Question_Object) =>
    dataService.add('Question', question),
  deleteQuestion: (question: Question_Object) =>
    dataService.deleteData('Question', question),
  updateQuestion: (question: Question_Object) =>
    dataService.update('Question', question)
})

export default questionsService

dataService.data$('Questions', (questions: Question_Object[]) => {
  questionsService.questions = questions
  window['questions'] = questions
})
