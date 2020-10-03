import React from 'react'
import QuestionForm_Sub from './question-management-components/QuestionForm.sub'
import List_Partial from '../../partials/List.partial'

export default () =>

<question-management>
  <question-form class='section'>
    <section-heading>Add Question</section-heading>
    <QuestionForm_Sub />
  </question-form>

  <question-list class='section'>
    <section-heading>Questions List</section-heading>
    <List_Partial type='Question' />
  </question-list>

</question-management>
