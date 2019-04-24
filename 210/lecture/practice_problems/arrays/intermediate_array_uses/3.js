function mirror(arr) {
  return arr.concat([...arr].reverse());
}

console.log(mirror([1, 2, 3])); // [1, 2, 3, 3, 2, 1]
