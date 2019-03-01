'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter((val)=>{
    return collection_b.includes(val);
  })
}

module.exports = choose_common_elements;
