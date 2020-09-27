import { Component, Host, h } from '@stencil/core';

@Component({tag: 'view-selectors'})
export class ViewSelectors {
  
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
