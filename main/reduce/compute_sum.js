'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((tmp,val)=>tmp+val);
}

module.exports = calculate_elements_sum;

