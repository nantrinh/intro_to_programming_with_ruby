function shift(array) {
  let value = array[0];
  for (i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1]; 
  }
  array.length -= 1;
  return value;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
