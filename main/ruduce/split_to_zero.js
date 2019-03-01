'use strict';

function spilt_to_zero(number, interval) {
  let res = [];
  Function.prototype.floatSplit = (a,b)=>{
    let _posA = a.toString().split('.')[1].length;
    let _posB = b.toString().split('.')[1].length;
    let _pos = (_posA>_posB)?_posA:_posB;

    let A = a*_pos*10;
    let B = b*_pos*10;

    let num = (A - B)/(_pos*10);
    return num;
  }
  res.push(number);
  while(number > 0){
    number = Function.floatSplit(number,interval);
    res.push(number);
  }
  return res;
}

module.exports = spilt_to_zero;
