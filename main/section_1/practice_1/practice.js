function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter((val)=>{
    return collection_b.includes(val)
  });
}

module.exports = collect_same_elements;
