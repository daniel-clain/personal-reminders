import { Component, Host, h, Prop } from '@stencil/core';

@Component({tag: 'form-field'})
export class FormField {
  @Prop() key

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
