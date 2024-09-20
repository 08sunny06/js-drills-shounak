import * as arrays from "./arrays.js"
import * as func from "./solution.js"

let ar1 = arrays.items
let ar2 = arrays.nestedArray

let reqEach = func.eacH(ar1, function(ele){return ele*=3})
let reqMap = func.map(ar1, function(ele){return Math.sqrt(ele)})
let reqRed = func.reduc(ar1, function(tot, val){return tot+=val}, 0)
let reqfind = func.finD(ar1, function(cont){return(cont===3)})
let reqfil = func.filtr(ar1, function(contants){if(contants%2===0)return contants})
let reqflat = func.flatten(ar2)
console.log(reqEach)
console.log(reqMap)
console.log(reqRed)
console.log(reqfind)
console.log(reqfil)
console.log(reqflat)
