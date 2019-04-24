function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function concat(firstArray, secondArray) {
  let newArray = [];
  let i;

  for (i = 0; i < firstArray.length; i += 1) {
    push(newArray, firstArray[i]);
  }

  for (i = 0; i < secondArray.length; i += 1) {
    push(newArray, secondArray[i]);
  }
  
  return newArray;
}
console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
