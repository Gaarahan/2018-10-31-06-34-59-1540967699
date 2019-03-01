'use strict';

function find_last_even(collection) {
  let res = -1;
  collection.forEach((val)=>{
    if( val % 2 === 0){
      res = val;
    }
  })
  return res;
}

module.exports = find_last_even;
