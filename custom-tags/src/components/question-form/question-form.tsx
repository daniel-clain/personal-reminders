import { Component, Host, h } from '@stencil/core';

@Component({tag: 'question-form'})
export class QuestionForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
