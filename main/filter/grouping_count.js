'use strict';

function grouping_count(collection) {
  //在这里写入代码
  let res = {};
  collection.forEach((val)=>{
    if(res[`${val}`])
      res[`${val}`] ++;
    else
      res[`${val}`] = 1;
  });
  return res;
}

module.exports = grouping_count;
