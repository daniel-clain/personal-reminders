
interface Elem extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
  class?: any
}

declare namespace JSX {
  interface IntrinsicElements {
    'categories-container': Elem
    'category-selector': Elem
    'category-tag': Elem
    'category-form': Elem
    'category-list': Elem
    'category-management': Elem
    'form-field': Elem
    'question-form': Elem
    'question-list': Elem
    'question-management': Elem
    'section-heading': Elem
    'text-input': Elem
    'view-selector': Elem
    'view-selectors': Elem
    'quiz-view': Elem
    'form-buttons': Elem
    'list-item': Elem
  }
}