'use strict';

function median_to_letter(collection) {
  let pos = Math.floor(collection.sort().length/2);
  let tmp;
  if(pos %2 === 0){
    tmp = (collection[pos-1]+collection[pos])/2;
  }
  else{
    tmp = collection[pos];
  }
  return fromNum(tmp);
}
function fromNum(x){
  let res = '';
  x = Math.ceil(x);
  if(x > 26){
    res += 'a';
    x %= 26;
  }
  res += String.fromCharCode(x + 96);
  return res;
}

module.exports = median_to_letter;
