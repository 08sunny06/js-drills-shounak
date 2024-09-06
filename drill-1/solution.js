function email(arr){
  let em = [];
  for(let i=0; i<arr.length; i++){
    em.push(arr[i]["email"]);
  }
  return em
}

function hobbies(arr){
  let hob = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]['age']==30){
      hob.push(arr[i]['hobbies'])
    }    
  }
  if(hob.length==0)
    hob = 'Not Found'
  return hob
}

function studName(arr){
  let nam = []
  for(let i=0; i<arr.length; i++){
    if(arr[i]["country"]=='Australia')
      nam.push(arr[i].isStudent)
  }
  if(nam.length==0)
    nam = 'Not Found'
  return nam
}

function namAndCit(arr,ind){
  return [arr[ind-1]["name"],arr[ind-1]["city"]]
}

function ages(ar){
  let ag = [];
  for(let i=0; i<ar.length; i++){
    ag.push(ar[i].age)
  }
  return ag
}

function firstHobby(ar){
  let firHob = []
  for(let i=0; i<ar.length; i++){
    firHob.push(ar[i]["hobbies"][0])
  }
  return firHob
}

function nameAndEmail(ar, age){
  let namEm = []
  for(let i=0; i<ar.length; i++){
    if(ar[i]['age']==age)
    namEm.push([ar[i]["name"],ar[i]["email"]])
  }
  if(namEm.length==0)
    namEm = 'Not Found'
  return namEm
}

function cityAndCountry(ar){
  let citCo = [];
  for(let i=0; i<ar.length; i++){
    citCo.push([ar[i]['city'],ar[i]['country']])
  }
  return citCo
}


export {email, hobbies, studName, namAndCit, ages, firstHobby, nameAndEmail, cityAndCountry};
