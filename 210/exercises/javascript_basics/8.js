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

function stringToSignedInteger(string) {
  let multiplier = 1;
  let i;
  let result = 0;
  let start = string.length - 1;
  let end = 0;

  if (string[0] == '-' || string[0] == '+') {
    end += 1;
  }

  for (i = string.length - 1; i >= end; i -= 1) {
    result += DIGITS[string[i]] * multiplier; 
    multiplier *= 10;
  }

  if (string[0] == '-') {
    result = 0 - result; 
  }

  return result;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
