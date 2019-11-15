import React, { Component } from "react";
import { QuestionStore } from "../../../../mobx-stores/question.store";
import {observer} from 'mobx-react';
import { TagStore } from "../../../../mobx-stores/tag.store";
import EditDeleteItem from "../../../partials/EditDeleteItem";
import AddQuestionForm from "./QuestionForm.component";

@observer
export default class QuestionsList extends Component<
{ questionStore: QuestionStore; tagStore: TagStore }>{
  render() {
    const { questionStore, tagStore } = this.props
    return (
      <div className="questions-list">
        <div>Questions</div>
        {questionStore.questions.map((question, i) =>
          <EditDeleteItem item={question} key={i}>              
            <AddQuestionForm questionStore={questionStore} tagStore={tagStore} editingQuestion={question} />
          </EditDeleteItem>
        )}
      </div>
    )
  }
}