function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let res = [];
  collection_a.forEach((val)=>{
    let s = val.key;
    if(object_b['value'].includes(s)){
      res.push(s);
    }
  });
  return res;
}

module.exports = collect_same_elements;
