function firstIndex(value, array) {
  let i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

console.log(firstIndex(2, [1, 2, 3]) === 1);
console.log(firstIndex(9, [1, 2, 3]) === -1);
