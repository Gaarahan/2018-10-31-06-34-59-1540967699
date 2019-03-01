function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  let tmp = {};
  collection.forEach((val)=>{
    let count = 1;
    if(val.length !== 1){
      let s = val.split('-');
      val = s[0];
      count = parseInt(s[1]);
    }
    if(tmp[val]){
      tmp[val] += count;
    }
    else{
      tmp[val] = count;
    }
    count = 1;
  });

  for(key in tmp){
    let count = tmp[key];
    res.push({key,count});
  }
  return res;
}

module.exports = count_same_elements;
