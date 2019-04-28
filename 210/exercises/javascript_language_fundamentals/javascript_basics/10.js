const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 

function integerToString(integer) {
  let resultArr = [];

  if (integer < 10) {
    return DIGITS[integer]; 
  }

  modulus = 10;
  divisor = 1;
  while (integer > 0) {
    temp = Math.floor((integer % modulus) / divisor);
    resultArr.push(DIGITS[temp]); 
    integer -= temp * divisor;
    modulus *= 10;
    divisor *= 10;
  } 
  return resultArr.reverse().join('');
}

function signedIntegerToString(integer) {
  let string = integerToString(Math.abs(integer));
  let prefix = '';

  if (integer < 0) {
    prefix = '-'; 
  } else if (integer > 0) {
    prefix = '+'; 
  }

  return `${prefix}${string}`;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
