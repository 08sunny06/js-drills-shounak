function eacH(elements, cb){
  let val = 0
  for(let i=0; i<elements.length; i++){
  val = cb(elements[i],i,elements)
  console.log(val)
  }
  return ""
}

function map(elements, cb){
  let newAr = []
  for(let i=0; i<elements.length; i++){
  newAr.push(cb(elements[i],i,elements))
  }
  return newAr;
}

function reduc(element, cb, startVal){
  let res = startVal
 for(let i in element){
 res = cb(res, element[i], i, element)
 }
 return res
}

function finD(element, cb){
  for(let ele of element){   
   if(cb(ele))
    return ele
  }
}

function filtr(element, cb){
  let newAr = []
  for(let ele of element){
  if(cb(ele)!=undefined)
  newAr.push(cb(ele))
  }
  return newAr
}

function flatten(arr){
 let newAr = [];
 function process(ar){
  for(let len=0; len<ar.length; len++){
   if(typeof ar[len] == 'object')
    process(ar[len])
   else 
    newAr.push(ar[len])
   }
   return newAr 
 }
return process(arr)
}
export {eacH, map, reduc, finD, filtr, flatten}
