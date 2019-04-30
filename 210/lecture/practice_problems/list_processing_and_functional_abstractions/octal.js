function octalToDecimal(numberString) {
  const BASE = 8;
  var digitsReversed = numberString.split('').map(digit => Number(digit)).reverse();
  var sum = digitsReversed.reduce(function (accum, digit, index) {
    return accum + (digit * (BASE ** index)); 
  }, 0);
  return sum;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
