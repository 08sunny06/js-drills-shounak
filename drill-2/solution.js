function vidGam(objPer){
  let person = [];
  for(let per in objPer){
    if(/video games/i.test(objPer[per]["interests"]))
      person.push(per)
  }  
  return {'VideoGames': person}
}

function homTown(objPer){
  let person = []
  for(let per in objPer){
    if(/germany/i.test(objPer[per]["nationality"]))
      person.push(per)
  }
  return {'Germany': person}
}

function degree(objPer){
  let person = []
  for(let per in objPer){
    if(/masters/i.test(objPer[per]["qualification"]))
    person.push(per)
  }
  return {'Masters': person}
}

function groupProgrammers(objPer){
 let person = {}; let lang = [/Golang/, /Javascript/, /Python/]
 for(let l in lang){
  let p = [];
  for(let per in objPer){
    if(lang[l].test(objPer[per]["desgination"]))
      p.push(per)
    }
    person[lang[l].toString()] = p 
  }
  return person
}
export {vidGam, homTown, degree, groupProgrammers};
