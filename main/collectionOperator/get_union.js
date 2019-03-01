'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var res = [].concat(collection_a);
  collection_b.forEach((val)=>{
    if(!collection_a.includes(val)){
      res.push(val);
    }
  });
  return res;
}

module.exports = get_union;

