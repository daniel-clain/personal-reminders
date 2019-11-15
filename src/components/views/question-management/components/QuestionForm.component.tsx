import React, { Component } from "react";
import { QuestionStore } from "../../../../mobx-stores/question.store";
import FormField from "../../../partials/FormField";
import { TagStore } from "../../../../mobx-stores/tag.store";
import { Question } from "../../../../types/question.type";
import { SubmittedQuestion } from "../../../../types/submitted-question.type";

export type QuestionFields = 'question' | 'answer' | 'tags'

export default class QuestionForm extends Component<
 {questionStore: QuestionStore, tagStore: TagStore, editingQuestion?: Question}, any>{

  constructor(props) {
    super(props)
    if(this.props.editingQuestion){
      const {value, correctAnswer, tags} = this.props.editingQuestion
      this.state = {
        question: value,
        answer: correctAnswer,
        tags
      }
    } else {
      this.state = {
        question: '',
        answer: '',
        tags: []
      }
    }
  }
  
  handleFieldUpdate(field: QuestionFields, value: any){
    this.setState({[field]: value})
  }

  submitQuestion(){
    const {questionStore, editingQuestion} = this.props
    const {question, answer, tags} = this.state
    const submittedQuestion: SubmittedQuestion = {
      value: question,
      correctAnswer: answer,
      tags
    }
    try{
      if(editingQuestion){
        questionStore.updateQuestion(editingQuestion, submittedQuestion) 

      } else {
        questionStore.addQuestion(submittedQuestion)    
        this.setState({
          question: '',
          answer: '',
          tags: []
        }) 

      }
    } 
    catch(validationErrors){
      alert(validationErrors.join('\n'))
      return
    } 
  }

  render() {
    const {question, answer, tags} = this.state
    const {editingQuestion, tagStore} = this.props
    let handleFieldUpdate = this.handleFieldUpdate.bind(this)
    return (
      <div className="add-question">
        <h2>Add Question</h2>
        <FormField 
          name='question' 
          type='input'
          onUpdate={handleFieldUpdate} 
          value={question}
        />
        <FormField 
          name='answer' 
          type='textarea'
          onUpdate={handleFieldUpdate} 
          value={answer}
        />          
        <FormField 
          name='tags' 
          type='checkboxes'
          onUpdate={handleFieldUpdate} 
          tags={tags}
          tagStore={tagStore}
        />  
        <button onClick={this.submitQuestion.bind(this)}>
        {editingQuestion ? 'Update' : 'Submit'}
        </button>
      </div>
    )
  }
}