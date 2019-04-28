function union(arr1, arr2) {
  let result = [];
  let i;
  for (i = 0; i < arr1.length; i += 1) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]); 
    }
  } 
  for (i = 0; i < arr2.length; i += 1) {
    if (!result.includes(arr2[i])) {
      result.push(arr2[i]); 
    }
  }
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
