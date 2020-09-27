import { Component, Host, h } from '@stencil/core';

@Component({tag: 'category-selector'})
export class CategorySelector {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
