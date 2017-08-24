var Queue = function() {
  this.newest = 0;
  this.oldest = 0;
};

Queue.prototype.enqueue = function(value) {
  this.newest++;
  this[this.newest] = value;
};

Queue.prototype.dequeue = function() {
  if (this.newest - this.oldest > 0) {
    this.oldest++;
    var deleted = this[this.oldest];
    delete this[this.oldest];
    return deleted;
  }
};

Queue.prototype.size = function() {
  return this.newest - this.oldest;
};