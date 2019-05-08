function transpose(matrix) {
  var newArray = []; 
  var i;
  var j;

  for (i = 0; i < matrix[0].length; i += 1) {  
    newArray.push([]);
  }

  for (i = 0; i < matrix.length; i += 1) {
    for (j = 0; j < matrix[0].length; j += 1) {
      newArray[j][i] = matrix[i][j]; 
    } 
  } 
  return newArray;
}

function rotate90(matrix) {
  if (
    !Array.isArray(matrix)
    || matrix.length === 0
    || !matrix.every(row => Array.isArray(row) && row.length === matrix[0].length && row.length > 0)
  ) {
    return 'Argument must be an MxN array'; 
  }
  return transpose(matrix).map(row => row.reverse());
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// invalid
console.log(rotate90(1));
console.log(rotate90('str'));
console.log(rotate90([1, 2, 3]));
console.log(rotate90([[], [], []]));
console.log(rotate90([[1, 2], [3, 4], [5]]));
