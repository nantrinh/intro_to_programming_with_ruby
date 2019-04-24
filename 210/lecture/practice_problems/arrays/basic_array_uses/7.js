function lastNOf(arr, count) {
  if (count > arr.length) {
    return [...arr] 
  } else {
    return arr.slice(arr.length - count);
  }
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 10));    // returns [16, 23, 42]
