import React from "react";
import questionStoreSingleton from "../../../../mobx-stores/question.store";
import {observer} from 'mobx-react';
import EditDeleteItem from "../../../partials/EditDeleteItem";
import QuestionForm from "./QuestionForm.component";


export default observer(function QuestionsList (){ 
  return (
    <div className="questions-list">
      <div>Questions</div>
      {questionStoreSingleton.questions.map((question, i) =>
        <EditDeleteItem item={question} key={i}>              
          <QuestionForm existingQuestion={question}  />
        </EditDeleteItem>
      )}
    </div>
  )
})