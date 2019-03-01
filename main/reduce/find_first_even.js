'use strict';

function find_first_even(collection) {
  let res = -1;
  let finded = false;
  collection.forEach((val)=>{
    if(!finded && val % 2 === 0){
      res = val;
      finded = true;
    }
  })
  return res;
}

module.exports = find_first_even;

