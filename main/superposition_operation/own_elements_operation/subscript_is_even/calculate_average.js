'use strict';
var calculate_average = function(collection){
  let arr= collection.filter((val,index)=>index%2!==0);
  return arr.reduce((a,b)=>a+b)/arr.length;
};
module.exports = calculate_average;
