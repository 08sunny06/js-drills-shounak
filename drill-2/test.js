import * as person from "./users.js"
import * as objFun from "./solution.js"


let ppl = person.users
console.log("\nAns-1"); console.log(objFun.vidGam(ppl, /video games/i)); console.log("\n\n")
console.log("Ans-2"); console.log(objFun.homTown(ppl,/germany/i)); console.log("\n\n")
console.log("Ans-3"); console.log(objFun.degree(ppl,/masters/i)); console.log("\n\n")
console.log("Ans-4"); console.log(objFun.groupProgrammers(ppl)); console.log("\n")
