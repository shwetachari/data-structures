var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;  
  this[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var deleted = this[this.count];    
    delete this[this.count];
    this.count--;
    return deleted;
  }
};

stackMethods.size = function() {
  return this.count;
};