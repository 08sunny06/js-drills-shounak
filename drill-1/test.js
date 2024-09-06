import * as jsDrill from "./solution.js";
import * as array from "./persons.js";


let ar1 = array.arrayOfObjects;
ar1 = Object.values(ar1);

console.log(jsDrill.email(ar1)+"\n\n");
console.log(jsDrill.hobbies(ar1)+"\n\n");
console.log(jsDrill.studName(ar1)+"\n\n");
console.log(jsDrill.namAndCit(ar1,3)+"\n\n");
console.log(jsDrill.ages(ar1)+"\n\n");
console.log(jsDrill.firstHobby(ar1)+"\n\n");
console.log(jsDrill.nameAndEmail(ar1,25)+"\n\n");
console.log(jsDrill.cityAndCountry(ar1)+"\n\n");
