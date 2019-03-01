'use strict';
function one_add_next_multiply_three(collection){
  let res = [];
  collection.forEach((val,index,arr)=>{
    if(index !== arr.length-1){
      res.push((arr[index+1]+val)*3);
    }
  });
  return res;
}
module.exports = one_add_next_multiply_three;
