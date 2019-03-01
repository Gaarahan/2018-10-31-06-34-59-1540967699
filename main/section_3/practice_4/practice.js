var count_ele = require("../../section_2/practice_2/practice.js");
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collection_c = count_ele(collection_a);
  return collection_c.filter((val)=>{
    if(object_b.value.includes(val.key)){
      let tmp = Math.floor(val.count/3);
      val.count -= tmp;
    }
    return true;
  })
}

module.exports = create_updated_collection;
