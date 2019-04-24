function indexOf(array, value) {
  let i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i; 
    } 
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1
