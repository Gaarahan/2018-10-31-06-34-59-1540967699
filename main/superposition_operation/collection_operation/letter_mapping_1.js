'use strict';

function even_to_letter(collection) {
  return collection.filter((val)=>val%2 === 0).map(val=>String.fromCharCode(val+96));
}

module.exports = even_to_letter;
