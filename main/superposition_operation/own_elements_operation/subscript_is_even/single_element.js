'use strict';
var single_element = function(collection){
  return collection
    .filter((val,index)=>(index+1)%2===0)
    .filter((val,index)=>{
    return collection.indexOf(val) === collection.lastIndexOf(val);
  })
};
module.exports = single_element;
