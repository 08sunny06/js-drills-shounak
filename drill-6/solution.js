function counterFactory(){
  let count = 0;
  let obj = {
   inc: function(){count++; console.log(`count increased to ${count}`)},
   dec: function(){count--; console.log(`count decreased to ${count}`)},
   getcou: () => count
  }
 return obj
}

function limitFunctionCallCount(cb, n){
 let count = 0; let n1 = 2
  function inv(){
   if(count<n)
   console.log(`after running ${count+1} ${(count==0)?"time":"times"} the result is  ${cb(n1)}`)
   else
   console.log(`sorry the max limit is over returning ${null}`)
  count++; n1 = cb(n1)
  }
  return {inv}
}

function cacheFunction(cb){
 let cache = {}

 function getUniqId(fn, args){
   let uniId = []
   uniId = uniId.concat(fn.name, args)
   return uniId.join("|")
 } 


 return function(...args){
 let id = getUniqId(cb, args)
 if(cache[id]){
  return `Extracted ${cache[id]} from memeory`
  }
 else{
   cache[id] = cb(...args)
   return `Calculated ${cache[id]}`
  }
 }
}


export {counterFactory, limitFunctionCallCount, cacheFunction}
