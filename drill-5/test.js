import * as objVal from "./objects.js"
import * as func from "./solution.js"

let ob = objVal.testObject
console.log(func.keys(ob))
console.log(func.values(ob))
let keyAr = func.mapObject(ob, function(item){return item})
console.log(keyAr)
console.log(func.pairs(ob))
console.log(func.invert(ob))
let neOb = {hobbies: "fighting crimes", cars: 3, color: "black", age: 28, location: "Gotham"}
console.log(func.defaults(ob,neOb))
