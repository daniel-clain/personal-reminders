
interface Elem extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{
  class?: string
  name?: string
  readonly?: boolean
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
    'view-selector': Elem
    'view-selectors': Elem
    'quiz-view': Elem
    'form-buttons': Elem
    'list-item': Elem
    'item-excerpt': Elem
    'parent-categories': Elem
    'child-categories': Elem
    'expanded-category-wrapper': Elem
    'quiz-setup': Elem
    'quiz-question': Elem
    'facebook-login': Elem
    'facebook-login-button': Elem
    'correctness-mark-button': Elem
    'correctness-mark-buttons': Elem
    'question-categories': Elem
    'filter-tools': Elem
  }
}
