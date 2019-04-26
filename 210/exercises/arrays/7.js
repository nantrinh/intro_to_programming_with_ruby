function shift(arr) {
  if (arr.length == 0) {
    return undefined; 
  } else {
    let val = arr[0];
    let i;
    for (i = 0; i < arr.length - 1; i += 1) {
      arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return val; 
  }
}

function unshift(arr) {
  let i;
  let j;
  arrLength = arr.length; // 3
  newValuesLength = arguments.length - 1; // 2

  for (i = arrLength + newValuesLength - 1; i >= newValuesLength; i -= 1) {
    arr[i] = arr[i - newValuesLength];
  }
  for (j = 0; j < newValuesLength; j += 1) {
    arr[j] = arguments[j + 1]; 
  }
  return arr.length;
}

console.log(shift([1, 2, 3]));             // 1
console.log(shift([]));                    // undefined
console.log(shift([[1, 2, 3], 4, 5]));     // [1, 2, 3]

var anotherTest = [1, 2, 3];
console.log(unshift(anotherTest, 5, 6));      // 5
console.log(anotherTest);                     // [5, 6, 1, 2, 3]

console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
