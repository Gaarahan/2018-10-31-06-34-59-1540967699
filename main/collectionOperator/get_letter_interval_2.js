'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  if(number_a === number_b){
      return [getChar(number_a)];
  }
  else{
    var a = (number_a > number_b)?number_b:number_a;
    var b = (number_a > number_b)?number_a:number_b;
    var res = [];
    for(var i = a;i <= b;i++){
        res.push(getChar(i));
    }
    return (number_a > number_b)?(res.reverse()):res;
  }
}

function getChar(val){
  var res = '';
  if(val > 26){
    let tmp = Math.floor(val/26);
    val %= 26;

    if(val === 0){
      val = 26;
      tmp -= 1;
    }
    res += getChar(tmp);
  }
  res += String.fromCharCode(val + 96);
  return res;
}

module.exports = get_letter_interval_2;

