var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //see if the item exists already in object
  //if it doesn't, then add it in there
  //if it does, do nothing
  // this._storage = Set obj we care about
  if (!this._storage[item]) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  // return a boolean if the item exists
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  .add: O(1)
  .contains: O(1)
  .remove: O(1)
 */
