import { Component, Host, h, Prop } from '@stencil/core';

@Component({tag: 'category-tag'})
export class CategoryTag {
  @Prop() key

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
