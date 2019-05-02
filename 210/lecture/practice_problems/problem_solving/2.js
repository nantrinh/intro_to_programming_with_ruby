// input: string
// output: boolean
//
// ignore all non-numeric characters in the input string
//
// moving right to left, double the value of every other digit
// for any digit that becomes 10 or more, subtract 9 from it
// add all of the digits together
// if the sum ends in 0 (if sum % 10 === 0) then return true, else false

function doubleEveryOtherNumber(numbers) {
  var doubled;
  return numbers.map(function (number, index) {
    if (index % 2 !== 0) {
      doubled = number * 2; 
      if (doubled >= 10) {
        doubled -= 9; 
      } 
      return doubled;
    } else {
      return number;
    } 
  });
}

function sum(array) {
  return array.reduce((accumulator, value) => accumulator + value);
}

function isValidLuhn(string) {
  if (typeof string !== 'string') {
    return false; 
  }

  var digits = string.replace(/[^\d]/g, '');

  if (digits === '') {
    return false; 
  }

  var reversedNumbers = digits.split('').map(Number).reverse();
  var total = sum(doubleEveryOtherNumber(reversedNumbers));
  return total % 10 === 0;
}

// iteration
function tryMakingValidLuhn(string) {
  var newString;
  for (i = 0; i <= 9; i += 1) {
    newString = string + String(i);
    if (isValidLuhn(newString)){
      return newString; 
    } 
  }
}

// Write a function that can add a check digit to make the number valid
// per the Luhn formula and return the original number plus the digit.
// This should give '2323 2005 7766 3554' in response to 
// '2323 2005 7766 355'.
function returnValidLuhn(string) {
  if (isValidLuhn(string)) {
    return string; 
  } else {
    return tryMakingValidLuhn(string);
    // if not possible, return undefined
  }
}

// if string is already valid, return the string
console.log(returnValidLuhn('2323 2005 7766 3554')); // '2323 2005 7766 3554'

// makes the string valid
console.log(returnValidLuhn('2323 2005 7766 355')); // '2323 2005 7766 3554'
console.log(returnValidLuhn('8753')); // '87536' 
console.log(returnValidLuhn('1111')); // '11114' 

//////////////////////////////////////////////
//console.log(isValidLuhn()); // 

// ignore all characters except digits
console.log(isValidLuhn('2323 2005 7766 3554')); // true
console.log(isValidLuhn('2323%2005xa 7766 ???<>3554')); // true

console.log(isValidLuhn('1111')); // false
console.log(isValidLuhn('8763')); // true

// zero is valid
console.log(isValidLuhn('0')); // true
console.log(isValidLuhn('0000')); // true

// empty string is invalid
console.log(isValidLuhn('')); // false
// no digits in string is invalid
console.log(isValidLuhn('abcdefg')); // false

// other data types are invalid
console.log(isValidLuhn(1111)); //  false
console.log(isValidLuhn([])); //  false
console.log(isValidLuhn({})); //  false
console.log(isValidLuhn(true)); //  false
