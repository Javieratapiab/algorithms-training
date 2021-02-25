// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = []
};

MinStack.prototype.push = function(x) {
  // min val grow from n inserted values
  // push(1) => [{1, 1}]
  // push(2) => [{1, 1}, {2, 1}],
  // push(-1) => [{1, 1}, {2, 1}, {-1, -1}],
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin())
  })
};

MinStack.prototype.pop = function() {
  // poop() => [{-1,-1}] -> [{1, 1}, {2, 1}],
  this.elements.splice(- 1)
};

MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value
};


MinStack.prototype.getMin = function() {
  // like a dumb person
  // if(this.elements.length > 0) {
  //   const min = [...this.elements].sort((a, b) => a - b)[0]
  //   return min
  // } else return []

  // like smart person, get the last inserted node and ask for the historic min
  return this.elements[this.elements.length - 1].min;
};

// ["MinStack","push","push","push","getMin","top","pop","getMin"]
// [[],[-2],[0],[-1],[],[],[],[]]

// [null,null,null,null,-2,-1,null,-2]

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)

console.log(obj)

console.log(obj.getMin())
console.log(obj.pop())

console.log(obj)

console.log(obj.top())
console.log(obj.getMin())


console.log(obj)
