'use strict';
function rank_by_two_large_one_small(collection){
  let arr = collection.sort((a,b)=>a-b);
  let pos = 0;
  let res = [];
  arr.forEach((val,index,arr)=>{
    if(index === pos){
      if(pos !== 0)
        res.push(arr[pos - 3]);
      pos += 3;
      if((index+3)>arr.length){
        res.push(val);
      }
    }else{
      res.push(val);
    }
  })
  return res;
}
module.exports = rank_by_two_large_one_small;
