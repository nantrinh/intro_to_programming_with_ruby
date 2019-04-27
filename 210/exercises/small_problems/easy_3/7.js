function runningTotal(arr) {
  if (arr.length === 0) {
    return arr; 
  }

  let result = [arr[0]];
  let i;
  for (i = 1; i < arr.length; i += 1) {
    result.push(result[result.length - 1] + arr[i]); 
  }
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
