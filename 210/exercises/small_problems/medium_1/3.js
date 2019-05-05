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
  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  var tempNumber = number;

  for (i = String(number).length; i >= 2; i -= 1) {
    tempNumber = rotateRightmostDigits(Number(tempNumber), i); 
  } 
  return tempNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
