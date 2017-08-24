var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.newest = 0;
  someInstance.oldest = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.newest++;
  this[this.newest] = value;
};

queueMethods.dequeue = function() {
  if (this.newest - this.oldest > 0) {
    this.oldest++;
    var deleted = this[this.oldest];
    delete this[this.oldest];
    return deleted;
  }
};

queueMethods.size = function() {
  return this.newest - this.oldest;
};
