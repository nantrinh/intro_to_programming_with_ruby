function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function slice(array, start, end) {
  let result = [];
  let i;
  for (i = start; i < end; i += 1) {
    push(result, array[i]);
  }
  return result;
}

let orig;
orig = [1, 2, 3, 4, 5];
console.log(slice(orig, 0, 2)); // [ 1, 2 ]
console.log(orig); // [1, 2, 3, 4, 5];


orig = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
slice(orig, 1, 3);  // [ 'b', 'c' ]
console.log(orig); // ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

