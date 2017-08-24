var Queue = function() {
  var someInstance = {};
  someInstance.mostRecentlyAdded = 0;
  someInstance.nextToLeave = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.mostRecentlyAdded++;
  //this --> object
  //adding to the end of that object
  //obj[key] = value;
  this[this.mostRecentlyAdded] = value;
};

queueMethods.dequeue = function() {
  if (this.mostRecentlyAdded - this.nextToLeave) {
    this.nextToLeave++;
    var deleted = this[this.nextToLeave];
    delete this[this.nextToLeave];
    return deleted;
  }
};

queueMethods.size = function() {
  return this.mostRecentlyAdded - this.nextToLeave;
};
