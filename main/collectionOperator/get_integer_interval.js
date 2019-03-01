'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if(number_a === number_b){
      return [number_a];
  }
  else{
    var a = (number_a > number_b)?number_b:number_a;
    var b = (number_a > number_b)?number_a:number_b;
    var res = [];
    for(var i = a;i <= b;i++){
        res.push(i);
    }
    return (number_a > number_b)?(res.reverse()):res;
  }
}

module.exports = get_integer_interval;

