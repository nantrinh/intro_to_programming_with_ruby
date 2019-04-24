function uniqueElements(arr) {
  let i;
  let newArr = [];
  for (i = 0; i < arr.length; i += 1) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]) 
    }
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));
// returns [1, 2, 4, 3, 5]
