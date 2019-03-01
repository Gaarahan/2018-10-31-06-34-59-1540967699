'use strict';
var single_element = function(collection){
  let arr = collection.filter((val,index)=>index%2!==0);
    return arr.filter((val,index)=>{
      return arr.indexOf(val) === arr.lastIndexOf(val);
    })
};
module.exports = single_element;
