import React from "react";
import questionStoreSingleton from "../../../../other/mobx-stores/question.store";
import {observer} from 'mobx-react';
//import EditDeleteItem from "../../../partials/EditDeleteItem";
import QuestionForm from "./Form.sub";


function List_Sub (){ 
  return (
    <div className="questions-list">
      <div>Questions</div>
      {/* {questionStoreSingleton.questions.map((question, i) =>
        <EditDeleteItem item={question} key={i}>              
          <QuestionForm existingQuestion={question}  />
        </EditDeleteItem>
      )} */}
    </div>
  )
}

export default observer(List_Sub)