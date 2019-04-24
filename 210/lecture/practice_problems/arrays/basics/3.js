function reverse(arr) {
  let i;
  let result = [];
  for (i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5]
console.log(reverse(numbers));
