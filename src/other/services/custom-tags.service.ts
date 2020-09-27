import { HTMLAttributes } from 'react';
import { applyPolyfills, defineCustomElements, JSX as LocalJSX } from '../../../custom-tags/loader'

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
} ;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {
    }
  }
}

const enableCustomTags = () => {
  applyPolyfills().then(() => {
    defineCustomElements(window)
  })
}

export default enableCustomTags