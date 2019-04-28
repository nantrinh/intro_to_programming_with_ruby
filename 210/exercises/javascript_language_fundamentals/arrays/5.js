function pop(arr) {
  if (arr.length === 0) {
    return undefined; 
  }
  let value = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return value;
}

function push(array) {
  let i;

  for (i = 1; i < arguments.length; i += 1) {
    array[array.length] = arguments[i];
  }

  return array.length;
}

// pop
// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(array);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
