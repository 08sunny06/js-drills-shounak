function keys(obj){
  let ar = []
  for(let key in obj){
    ar.push(key)
  }
  return ar
}

function values(obj){
  let ar = []
  for(let val in obj)
   ar.push(obj[val])
  return ar
}

function mapObject(obj, cb){
  let ar = [];
  for(let ele in obj){
  ar.push(cb(ele))
  }
  return ar
}

function pairs(obj){
  let ar = []
  for(let pr in obj)
    ar.push([pr,obj[pr]])
  return ar
}

function invert(obj){
  let ar = {}
  for(let inv in obj)
   ar[obj[inv]] = inv
  return ar
}

function defaults(obj, defaultProps){
  for(let ele in defaultProps){
  if(!obj.hasOwnProperty(ele))
   obj[ele] = defaultProps[ele]
  }
  return obj
}

export{keys, values, mapObject, pairs, invert, defaults}
