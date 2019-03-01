'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  if(number_a === number_b){
      return [String.fromCharCode(number_a + 96)];
  }
  else{
    var a = (number_a > number_b)?number_b:number_a;
    var b = (number_a > number_b)?number_a:number_b;
    var res = [];
    for(var i = a;i <= b;i++){
        res.push(String.fromCharCode(i + 96));
    }
    return (number_a > number_b)?(res.reverse()):res;
  }
}

module.exports = get_letter_interval;
