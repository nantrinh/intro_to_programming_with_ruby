function pop(array) {
  let value = array[array.length - 1];
  array.length -= 1;
  return value;
}
var count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
