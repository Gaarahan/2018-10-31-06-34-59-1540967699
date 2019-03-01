function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter((val)=>{
    if(object_b.value.includes(val.key)){
      let tmp = Math.floor(val.count/3);
      val.count -= tmp;
    }
    return true;
  })
}

module.exports = create_updated_collection;
