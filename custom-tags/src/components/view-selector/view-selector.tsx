import { Component, Host, h, Prop } from '@stencil/core';

@Component({tag: 'view-selector'})
export class ViewSelector {
  @Prop() key
  @Prop() selected
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
