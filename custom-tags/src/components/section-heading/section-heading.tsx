import { Component, Host, h } from '@stencil/core';

@Component({tag: 'section-heading'})
export class SectionHeading {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
