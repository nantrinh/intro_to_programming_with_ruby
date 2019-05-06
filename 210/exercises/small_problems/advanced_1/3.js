function transpose(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 || matrix.some(row => !Array.isArray(row) || row.length === 0)) {
    return 'Argument must be an array with at least one row and one column'; 
  }

  var newMatrix = []; 
  matrix.forEach(function (row, rowIndex) {
    row.forEach(function (value, columnIndex) {
      if (newMatrix[columnIndex] === undefined) {
        newMatrix[columnIndex] = []
        newMatrix[columnIndex][rowIndex] = value; 
      } else {
        newMatrix[columnIndex][rowIndex] = value; 
      }
    }); 
  });

  return newMatrix;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

var matrix2 = [
  [1, 2],
  [3, 4]
];

console.log(transpose(matrix2)); // [[1, 3], [2, 4]]

var matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(transpose(matrix3)); // [[1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
