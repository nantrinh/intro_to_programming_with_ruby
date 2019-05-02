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

  var numberString = string.replace(/[^\d]/g, '');

  if (numberString === '') {
    return false; 
  }

  var reversedNumbers = numberString.split('').map(Number).reverse();
  var total = sum(doubleEveryOtherNumber(reversedNumbers));
  return total % 10 === 0;
}

function calculateNextLuhn(number) {
  if (number < 10) {
    return 10;
  }
  var digits = String(number).split('').map(Number);
  digits[digits.length - 2] += 1;
  digits[digits.length - 1] = 0;
  return Number(digits.join(''));
}

function MakeValidLuhn(numberString) {
  var testString = numberString + '0';
  var reversedNumbers = testString.split('').map(Number).reverse();
  var total = sum(doubleEveryOtherNumber(reversedNumbers));
  if (total % 10 === 0) {
    return testString; 
  } else {
    nextLuhn = calculateNextLuhn(total); 
    var difference = nextLuhn - total;
    testStringArray = testString.split('');
    testStringArray[testStringArray.length - 1] = String(difference);
    return testStringArray.join('');
  }
}

// Write a function that can add a check digit to make the number valid
// per the Luhn formula and return the original number plus the digit.
// This should give '2323 2005 7766 3554' in response to 
// '2323 2005 7766 355'.
function returnValidLuhn(string) {
  const INVALID_INPUT = 'Invalid Input';

  if (typeof string !== 'string') {
    return INVALID_INPUT; 
  }

  var numberString = string.replace(/[^\d]/g, '');

  if (numberString === '') {
    return INVALID_INPUT; 
  }

  if (isValidLuhn(numberString)) {
    return numberString; 
  } else {
    return MakeValidLuhn(numberString);
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
