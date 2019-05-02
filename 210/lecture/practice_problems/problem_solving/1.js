// - input type: string
// - output type: string?
// 
// - ignore everything except digits
// 
// - Invalid inputs: what to return a string of 10 0s
//   - less than 10 digits or more than 11 digits
//   - If 11 digits and the first number is NOT 1
//
// - If 11 digits, and the first number is 1, remove 1 and use the last 10 digits
//

function isValidPhoneNumber(string) {
  return string.length === 10 || (string.length === 11 && string[0] == '1'); 
}

function cleanPhoneNumber(string) {
  const BAD_NUMBER = '0'.repeat(10); 

  if (typeof string !== 'string') {
    return BAD_NUMBER; 
  }

  var digits = string.replace(/[^\d]/g, '');

  if (!isValidPhoneNumber(digits)) {
    return BAD_NUMBER; 
  }

  if (digits.length === 11) {
    return digits.slice(1); 
  }

  return digits;
}

// Test cases

// ignore everything except digits
console.log(cleanPhoneNumber('X12345.&*a67890X')); // '1234567890'

// less than 10 digits
console.log(cleanPhoneNumber('')); // '0000000000'
// less than 10 digits
console.log(cleanPhoneNumber('123456789'));  // '00..0'
// 11 digits and first digit is NOT 1
console.log(cleanPhoneNumber('22345678901')); // '00..0'
// more than 11 digits
console.log(cleanPhoneNumber('123456789000'));  // '00..0'

// 11 digits and the first digits is 1
console.log(cleanPhoneNumber('12345678901')); // '2345678901' 
// 10 digits
console.log(cleanPhoneNumber('1234567890')); // '1234567890' 

// other data types?
// assumption: return '00..0'
