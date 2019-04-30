function multiplyAllPairs(firstArray, secondArray) {
  var multiples = [];
  firstArray.forEach(function (firstNum) {
    secondArray.forEach(function (secondNum) {
      multiples.push(firstNum * secondNum); 
    }); 
  });
  return multiples.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
