import * as vehicles from "./cars.js"
import * as carOper from "./solution.js"

let veh = vehicles.inventory

carOper.recall(33,veh)
carOper.lastcar(veh)
console.log(carOper.sortModel(veh))
let yr = carOper.year(veh)
console.log(yr)
console.log(carOper.reducedlot(yr))
console.log(carOper.carMak((veh)))
