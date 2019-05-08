// pointer1 for first array
// pointer2 for second array
// compare first two numbers
// push smaller value to a new array
// increment the pointer for that array
// if you reach the end of one array, push the rest of the elements of the other array
// return the result

function merge(array1, array2) {
  var index1 = 0;
  var index2 = 0;
  var result = [];

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] <= array2[index2]) {
      result.push(array1[index1]);
      index1 += 1;
    } else {
      result.push(array2[index2]);
      index2 += 1;
    }
  }

  if (index1 < array1.length) {
    result = result.concat(array1.slice(index1)); 
  } else if (index2 < array2.length) {
    result = result.concat(array2.slice(index2)); 
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
