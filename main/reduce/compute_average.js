'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((tmp,val)=>(val+tmp))/collection.length;
}

module.exports = compute_average;

