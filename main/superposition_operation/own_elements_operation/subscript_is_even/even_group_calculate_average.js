'use strict';
var even_group_calculate_average = function(collection){
  let arr = collection.filter((val,index)=>index%2===1).filter(val=>val%2===0);
  let one_arr = [];
  let two_arr = [];
  let three_arr = [];

  arr.forEach((val)=>{
    if(val < 10)
      one_arr.push(val);
    else if(val < 100)
      two_arr.push(val);
    else
      three_arr.push(val);
  });

  let res = [];
  let tmp;
  if(one_arr.length > 0){
    tmp = (one_arr.reduce((a,b)=>a+b))/one_arr.length;
    res.push(tmp);
  }
  if(two_arr.length > 0){
    tmp = (two_arr.reduce((a,b)=>a+b))/two_arr.length;
    res.push(tmp);
  }
  if(three_arr.length > 0){
    tmp = (three_arr.reduce((a,b)=>a+b))/three_arr.length;
    res.push(tmp);
  }
  return (res.length === 0)?[0]:res;
};
module.exports = even_group_calculate_average;
