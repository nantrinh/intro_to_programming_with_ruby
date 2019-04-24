function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function pop(array) {
  let value = array[array.length - 1];
  array.length -= 1;
  return value;
}

function splice(array, start, number) {
  let i;
  let result = [];
  for (i = start; result.length < number; i += 1) {
    push(result, array[i]);     
    array[i] = array[i + number];
  }
  array.length = array.length - number;

  return result;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
