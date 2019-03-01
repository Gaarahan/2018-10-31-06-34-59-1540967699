'use strict';
var number_map_to_word = function(collection){
  return collection.map((val)=>String.fromCharCode(val+96));
};

module.exports = number_map_to_word;
