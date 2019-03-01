'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  return collection.reduce((tmp,val)=>{
    return (val<tmp)?val:tmp;
  })
}

module.exports = collect_min_number;

