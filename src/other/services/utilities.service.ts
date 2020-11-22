export function chainFunctions<T>(functions: Function[]): T{
  /* let result
  for(let key in functionsObj) {
    result = functionsObj[key](result)
  }
  return result */
  return functions.reduce(
    (returnOfLastFunction, currentFunction) => 
      currentFunction(returnOfLastFunction), null
  )
}

export function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function random() { return Math.random() }


export const show = blocks => ({
  if: condition => condition ? blocks : null
})

export const createPropsObj = (propsAndConditions: {
  condition?,
  prop,
  elseProp?
}[]): any => {
  
  let returnObj = {}
  propsAndConditions.forEach(x => {
    if(x.condition || x.condition == undefined){
      if(typeof x.prop == 'string'){
        returnObj[x.prop] = ''
      }
      if(typeof x.prop == 'object'){
        returnObj  = {...returnObj, ...x.prop}
      }
    }
    else{
      if(typeof x.elseProp == 'string'){
        returnObj[x.elseProp] = ''
      }
      if(typeof x.elseProp == 'object'){
        returnObj  = {...returnObj, ...x.elseProp}
      }
    }
    
  })
  return returnObj
}