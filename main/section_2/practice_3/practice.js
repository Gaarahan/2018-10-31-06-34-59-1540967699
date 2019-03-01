function count_same_elements(collection) {
  let res = [];
  let tmp = {};
  collection.forEach((val)=>{
    let count = 1;
    if(val.length !== 1){
      let s;
      if(val.includes('-')){
        s = val.split('-');
      }else if(val.includes('[')){
        s = val.slice(0,-1).split('[');
      }
      else{
        s = val.split(':');
      }
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

  for(name in tmp){
    let summary = tmp[name];
    res.push({name,summary});
  }
  return res;
}

module.exports = count_same_elements;
