

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//limitedArray.set(index, value)
//limitedArray.get(index)

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // make an array if there's nothing at that index: [[k, v]]
  // if at that index, there's an array
    // check everything in that array to see if k already exists
      // overwrite key's value if k does exist
    // if we didn't find k, push [k,v] into that array
  
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, [[k, v]]);
  } else {
    var foundK = false;
    this._storage.get(index).forEach(function(pair, index) {
      if (pair[0] === k) {
        pair[1] = v;
        foundK = true;
      }
    });
    if (!foundK) {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // look up key --> the item of this._storage at that index
  // loop through pairs in bucket
    // check their first elements (key at index 0) to see if key === k
    // if we find it, return v (pair at index 1)
  var itemAtIndex = this._storage.get(index);
  var foundValue;
  itemAtIndex.forEach(function(pair) {
    if (pair[0] === k) {
      foundValue = pair[1];
    }
  });
  return foundValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // look up the item at the index (which will be an array of pairs)
  // loop through pairs in bucket
    // if pair[0] === k, then splice that pair from the array at the hash table index
  var itemAtIndex = this._storage.get(index);
  itemAtIndex.forEach(function(pair, i) {
    if (pair[0] === k) {
      //parentArray.splice(index, numberOfElementsToRemove)
      itemAtIndex.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


