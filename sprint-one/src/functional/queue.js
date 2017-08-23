var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var mostRecentlyAdded = 0;
  var nextToLeave = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    mostRecentlyAdded++;
    storage[mostRecentlyAdded] = value;
  };

  someInstance.dequeue = function() {
    if (mostRecentlyAdded - nextToLeave > 0) {
      nextToLeave++;
      var deleted = storage[nextToLeave];
      delete storage[nextToLeave];
      return deleted;
    }
  };

  someInstance.size = function() {
    return mostRecentlyAdded - nextToLeave;
  };

  return someInstance;
};
