
export function random() { 
  return 0.5 
}
 
export function shuffle(array) { return array }

export function chainFunctions<T>(functions: Function[]): T{
  return functions.reduce(
    (returnOfLastFunction, currentFunction) => 
      currentFunction(returnOfLastFunction), null
  )
}