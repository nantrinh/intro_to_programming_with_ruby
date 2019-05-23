// squareOfSum(n) - sumOfSquares(n)
//
// create array of 1 through n positive integers
// for loop
// reduce to get sum, square the result
// map: square each element, reduce to get sum
//
// calculate difference

function squareOfSum(numbers) {
  return numbers.reduce((a, b) => a + b) ** 2;
}

function sumOfSquares(numbers) {
  return numbers.map(number => number ** 2).reduce((a, b) => a + b); 
}

function firstPositiveIntegers(number) {
  var numbers = [];
  var i;
  for (i = 1; i <= number; i += 1) {
    numbers.push(i); 
  }
  return numbers;
}

function sumSquareDifference(number) {
  const INVALID = 'invalid';

  if (typeof number !== 'number') {
    return INVALID; 
  }  

  if (number === 0) {
    return 0; 
  } 

  var numbers = firstPositiveIntegers(number);
  return squareOfSum(numbers) - sumOfSquares(numbers);
}

// invalid
console.log(sumSquareDifference('3'));
console.log(sumSquareDifference([]));
console.log(sumSquareDifference());

console.log(sumSquareDifference(0)); // 0
console.log(sumSquareDifference(3));      
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
