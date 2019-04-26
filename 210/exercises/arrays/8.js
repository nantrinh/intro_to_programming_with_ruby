function slice(array, begin, end) {
  let result = [];
  let i;
  for (i = begin; i < end && i < array.length; i += 1) {
    result.push(array[i]); 
  }
  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
// 
// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]

function splice(arr, start, deleteCount, element1, elementN) {
  let deleted = [];
  let i;
  let arrLength = arr.length;

  // arr = [1, 2, 3];
  // start = 1;
  // deleteCount = 1;
  // element1 = 'two'

  if (element1 === undefined && elementN === undefined) {
    if ((start + deleteCount) >= arrLength) {
      deleted = arr.slice(start, deleteCount); 
      arrLength -= deleteCount;
    } else if (start == 0) {
      for (i = 0; i < deleteCount; i += 1) {
        deleted.push(arr.shift()); 
      }
    }
  } else if (element1 !== undefined && elementN === undefined) {
    if (deleteCount === 0) {
      for (i = arrLength; i > start; i -= 1) {
        arr[i + 1] = arr[i - 1]; 
      } 
      arr[start] = element1;
    } else if (deleteCount === 1) {
      deleted.push(arr[start]);
      arr[start] = element1; 
    } 
  } else if (element1 !== undefined && elementN !== undefined) {
    if (deleteCount === 2) {
      deleted = arr.slice(start, 2);
      arr[start] = element1; 
      arr[start + 1] = elementN;
    } 
  }
  return deleted;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 1, 'two'));             // [2]
// console.log(arr);                                  // [1, "two", 3]

// var arr = [1, 2, 3];
// console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
// console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
