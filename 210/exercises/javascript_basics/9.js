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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
