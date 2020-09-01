import { observable } from "mobx"
import { Question_Type } from "../../types/question.type"

const questionStore = observable({
  questions: <Question_Type[]> []
})

export default questionStore