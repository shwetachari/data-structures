var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance['count'] = 0;
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
