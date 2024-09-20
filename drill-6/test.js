import * as closures from "./solution.js"

let counter = closures.counterFactory()
let invoke = closures.limitFunctionCallCount((num) => num*=2, 4)
let add = closures.cacheFunction((num1,num2) => num1+num2)
counter.inc()
counter.inc()
counter.inc()
counter.dec()
counter.dec()
console.log()
invoke.inv()
invoke.inv()
invoke.inv()
invoke.inv()
invoke.inv()
invoke.inv()
console.log()
console.log(add(10,20))
console.log(add(10,20))
console.log(add(20,30))
console.log(add(20,30))
console.log(add(30,40))
console.log(add(30,40))
