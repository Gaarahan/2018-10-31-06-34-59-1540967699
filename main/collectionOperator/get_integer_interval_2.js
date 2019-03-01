'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  if(number_a === number_b){
    if(number_a%2 === 0){
      return [number_a];
    }
    else{
      return [];
    }
  }
  else{
    var a = (number_a > number_b)?number_b:number_a;
    var b = (number_a > number_b)?number_a:number_b;
    var res = [];
    for(var i = a;i <= b;i++){
      if(i%2 === 0)
        res.push(i);
    }
    return (number_a > number_b)?(res.reverse()):res;
  }
}

module.exports = get_integer_interval_2;
