function recall(n,arr){
  console.log("Car "+arr[n-1]["id"]+" is a "+arr[n-1]["car_year"]+" "+arr[n-1]["car_make"]+" "+arr[n-1]["car_model"])	
}

function lastcar(arr){
  console.log("Last car is a "+arr[arr.length-1]["car_make"]+" "+arr[arr.length-1]["car_model"]);
}

function sortModel(arr){
  let mod = [];
  for(let i=0; i<arr.length; i++){
    let m = arr[i]["car_model"]
    for(let j=i+1; j<arr.length; j++){
      if(m<arr[j]["car_model"])
        m = arr[j]["car_model"]
    }
   mod.push(m)
  }
  return mod
}

function year(arr){
  let yr = []
  for(let i=0; i<arr.length; i++){
   yr.push(arr[i]["car_year"])
  }
  return yr
}

function reducedlot(arr){
  let rd = []
  for(let i=0; i<arr.length; i++){
    if(arr[i]>2000)
      rd.push(arr[i])
  }
  return rd
}

function carMak(arr){
  let mk = []
  for (let i=0; i<arr.length; i++){
    if(/(BMW|Audi)/.test(arr[i]["car_make"]))
      mk.push(arr[i])
  }
  return JSON.stringify(mk)
}
export {recall, lastcar, sortModel, year, reducedlot, carMak}
