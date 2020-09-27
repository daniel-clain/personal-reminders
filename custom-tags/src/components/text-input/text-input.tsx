import { Component, Host, h } from '@stencil/core';

@Component({tag: 'text-input'})
export class TextInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
