function square(matrix) {
  var length = matrix.length;
  return length > 0 && matrix.every(subarray => Array.isArray(subarray) && subarray.length === length);
}

function transpose(matrix) {
  if (!Array.isArray(matrix) || !square(matrix)) {
    return 'Argument must be a square array'; 
  }

  var newMatrix = []; 
  var i;
  var j;
  var row;
  for (i = 0; i < matrix.length; i += 1) {
    row = [];
    for (j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]); 
    }
    newMatrix.push(row);
  }
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

// invalid
console.log(transpose([[0, 0, 0], [0, 0, 0], [0, 0]]));
console.log(transpose([1, 2, 3]));
console.log(transpose(['a', 'b', 'c']));
console.log(transpose('hello'));
