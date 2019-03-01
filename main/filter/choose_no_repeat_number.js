'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return collection.filter((val,index)=>{
    return collection.indexOf(val) === index;
  });
}

module.exports = choose_no_repeat_number;
