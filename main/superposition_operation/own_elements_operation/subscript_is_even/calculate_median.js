'use strict';
var calculate_median = function(collection){
  let arr;
  if(collection.length %2 === 0){
    arr = collection.filter((val,index)=>index%2!==0);
  }else{
    arr = collection.filter((val,index)=>index%2===0);
  }
 console.log(arr);

  let half = Math.floor(arr.length/2);
  if(arr.length%2 === 0){
    return (arr[half]+arr[half-1])/2;
  }
  return arr[half];
};
module.exports = calculate_median;
