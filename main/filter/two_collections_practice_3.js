'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter((val_a)=>{
    return collection_b.some((val_b)=>{
      return val_a%val_b === 0;
    })
  });
}

module.exports = choose_divisible_integer;
