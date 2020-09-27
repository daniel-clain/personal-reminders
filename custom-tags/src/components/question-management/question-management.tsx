import { Component, Host, h } from '@stencil/core';

@Component({tag: 'question-management'})
export class QuestionManagement {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
