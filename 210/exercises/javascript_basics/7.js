const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

function stringToInteger(string) {
  let multiplier = 1;
  let i;
  let result = 0;
  for (i = string.length - 1; i >= 0; i -= 1) {
    result += DIGITS[string[i]] * multiplier; 
    multiplier *= 10;
  }
  return result;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
