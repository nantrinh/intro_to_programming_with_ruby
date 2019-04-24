function matrixSums(arr) {
  const reducer = (accum, val) => accum + val;
  return arr.map(subarr => subarr.reduce(reducer));
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));
// returns [15, 60, 12]
