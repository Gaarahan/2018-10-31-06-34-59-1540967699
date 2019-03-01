'use strict';

function average_uneven(collection) {

  let tmp =collection.filter(val=>val%2!== 0);
  return tmp.reduce((a,b)=>a+b)/tmp.length;
}

module.exports = average_uneven;
