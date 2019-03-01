'use strict';

function amount_even(collection) {
  return collection.filter(val=>val%2===0).reduce((a,b)=>a+b);

}

module.exports = amount_even;
