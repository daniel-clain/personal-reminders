import { Component, Host, h } from '@stencil/core';

@Component({tag: 'category-form'})
export class CategoryForm {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
