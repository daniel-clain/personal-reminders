import { chainFunctions } from "../../services/utilities.service"

describe(`chainFunctions()`, () => {
  describe(`It takes an array of functions. It executes each function sequentially, passing the return value of each function as a paramater to the next function. It returns the value of the final functions return`, () => {    

    const testFunctions = [
      () => 'function 1 return',
      function1Return => function1Return.toUpperCase(),
      function2Return => function2Return.split('').reverse().join('')
    ]
    const result = chainFunctions(testFunctions)

    test('', () => {
      expect(result).toEqual('NRUTER 1 NOITCNUF')
      expect(result).not.toEqual('nruter 1 noitcnuf')
    })
  })
})





