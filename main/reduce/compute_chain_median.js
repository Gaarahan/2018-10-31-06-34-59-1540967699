'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split('->').map((val)=>parseInt(val)).sort((a,b)=>a-b);
  let half_length = Math.floor(arr.length/2);
  return (arr.length%2 === 0)?(arr[half_length -1] + arr[half_length])/2:arr[half_length];
}

module.exports = compute_chain_median;
