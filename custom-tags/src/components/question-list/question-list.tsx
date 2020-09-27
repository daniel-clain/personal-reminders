import { Component, Host, h } from '@stencil/core';

@Component({tag: 'question-list'})
export class QuestionList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
