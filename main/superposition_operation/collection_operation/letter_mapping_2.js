'use strict';

function average_to_letter(collection) {
  let average = collection.reduce((tmp,val)=>tmp+val)/collection.length;
  return String.fromCharCode(Math.ceil(average)+96);
}

module.exports = average_to_letter;

