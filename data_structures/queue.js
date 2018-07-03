var Queue = function() {
  var storage;

  this.enqueue = function(value) {
    if (typeof storage === 'undefined') {
      storage = [];
    }
    storage.push(value);
  };

  this.dequeue = function() {
    return storage.shift();
  };

  this.peek = function() {
    return storage[0];
  };
};
