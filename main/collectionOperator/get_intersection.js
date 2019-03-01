'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  collection_b.forEach(function(val){
    if(collection_a.includes(val)){
      res.push(val);
    }
  });
  return res;
}

module.exports = get_intersection;
