import { Component, Host, h } from '@stencil/core';

@Component({tag: 'category-list'})
export class CategoryList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
