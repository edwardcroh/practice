var Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  initialValue ? this.push(initialValue) : null;
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return this.count > 0 ? this.storage[this.count - 1] : null;
};

Stack.prototype.push = function(value) {
  return (this.storage[this.count + 1] = value);
};

Stack.prototype.pop = function() {
  if (!this.count) {
    var hold = this.storage[this.count];
    delete this.storage[this.count];
    return hold;
  }
};
