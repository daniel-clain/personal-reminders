import { View_Type } from "../other/types/view.type"
import {react} from './react'
import { Question_Sub } from "../components/views/quiz/quiz-components"
import { components } from "./components"


type Functions = {}


type State = {
  'the selected view': 'the quiz view' | 'the question management view'
}
type Types = {
  'quiz': View_Type,
  'question management': View_Type
}

type Utilities = {
  'if': (...args) => any,
  'then show': (...args) => any
}



let state: State = {
  'the selected view': null,
}

let functions: Functions = {
  'the selected view': () => state["the selected view"],
  'react': react
}

let types: Types = {
  'question management': 'Question Management',
  'quiz': 'Quiz'
}


let utilities: Utilities = {
  'if': (first: View_Type, check, second: View_Type) => check == 'is' ? first == second : null,
  'then show': effect => effect()
}



export const f = functions
export const s = state
export const t = types
export const u = utilities
export const c = components
