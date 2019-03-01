'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce((tmp,val,index)=>{
    return (tmp && val === collection_b[index])?true:false;
  });
}

module.exports = compare_collections;


