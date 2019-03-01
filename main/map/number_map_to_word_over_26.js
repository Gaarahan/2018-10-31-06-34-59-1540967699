'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map((val)=>{
    let res = "";
    if(val > 26){
      val = val%26;
      res = "a";
    }
    res += String.fromCharCode(val+96);
    return res;
  });
};

module.exports = number_map_to_word_over_26;
