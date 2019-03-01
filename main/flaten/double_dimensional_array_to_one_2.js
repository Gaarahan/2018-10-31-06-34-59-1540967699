'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.reduce((acc,val)=>{
    if(Array.isArray(val)){
      return acc.concat(double_to_one(val));
    }
    else{
      acc.push(val);
      return acc;
    }
  },[]).filter((val,index,arr)=>{
    return arr.indexOf(val) === index;
  });
}

module.exports = double_to_one;
