import { Component, Host, h } from '@stencil/core';

@Component({tag: 'category-management'})
export class CategoryManagement {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
