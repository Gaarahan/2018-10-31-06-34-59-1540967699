function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  let tmp = {};
  collection.forEach((val)=>{
    if(tmp[val]){
      tmp[val] ++;
    }
    else{
      tmp[val] = 1;
    }
  });
  for(key in tmp){
    let count = tmp[key];
    res.push({key,count});
  }
  return res;
}

module.exports = count_same_elements;
