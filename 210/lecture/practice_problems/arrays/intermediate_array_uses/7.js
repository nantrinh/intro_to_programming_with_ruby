function missing(arr) {
  let i;
  let completeArr = []; 
  for (i = arr[0]; i <= arr[arr.length - 1]; i += 1) {
    completeArr.push(i); 
  }
  let newArr = completeArr.filter(element => !arr.includes(element));
  return newArr;
}

console.log(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));   // []
console.log(missing([1, 5]));         // [2, 3, 4]
console.log(missing([6]));            // []
