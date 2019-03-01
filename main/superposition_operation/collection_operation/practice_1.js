'use strict';

function hybrid_operation(collection) {

  return collection.map(val=>(val*3+2)).reduce((tmp,val)=>tmp+val);
}

module.exports = hybrid_operation;

