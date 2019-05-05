function rotateRightmostDigits(number, n) {
  if (typeof number !== 'number') {
    return undefined; 
  }

  if (String(number).length < n) {
    return number; 
  }

  var numberString = String(number);
  var firstPart = numberString.slice(0, numberString.length - n);
  var secondPart = numberString.slice(numberString.length - n);
  var resultString = firstPart + rotateString(secondPart);
  console.log(resultString);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// not a number
console.log(rotateRightmostDigits('abc', 1));   // undefined
console.log(rotateRightmostDigits([], 2));      // undefined
// rotate more digits than there are in the number
console.log(rotateRightmostDigits(0, 3));      // 0 
console.log(rotateRightmostDigits(23, 4));     // 23 
console.log(rotateRightmostDigits(1234, 5));   // 1234 
