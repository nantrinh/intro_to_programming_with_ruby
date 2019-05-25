function newStack() {
  array = [];
  return {
    push: function(value) {
      array.push(value);
    }, 
    pop: function() {
      return array.pop();
    }, 
    printStack: function() {
      array.forEach(value => console.log(value));
    }, 
  };
}

var stack = newStack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.pop();
stack.printStack();
