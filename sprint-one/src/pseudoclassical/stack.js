var Stack = function() {
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.count++;
  this[this.count] = value;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    var deleted = this[this.count];
    delete this[this.count];
    this.count--;
    return deleted;
  }
};

Stack.prototype.size = function() {
  return this.count;
};
