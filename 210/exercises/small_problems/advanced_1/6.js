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

function mergeSort(array) {
  var midpoint = Math.floor(array.length / 2);
  var subarray1;
  var subarray2;

  if (array.length === 1) {
    return array; 
  } else {
    subarray1 = mergeSort(array.slice(0, midpoint));
    subarray2 = mergeSort(array.slice(midpoint));
  
    return merge(subarray1, subarray2);
  }
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

