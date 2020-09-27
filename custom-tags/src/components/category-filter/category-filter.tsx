import { Component, Host, h, Prop, Listen, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'category-filter',
  shadow: true,
})
export class CategoryFilter{
  @Prop() ref
  @Event() filtering: EventEmitter<string>;
  @Listen('input', { target: this })
  onInput({target: {innerText}}) {
    this.filtering.emit(innerText)
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
