function sum(integer) {
  if (typeof integer !== 'number'|| integer % 1 !== 0 || integer <= 0) {
    return 'Argument must be a positive integer'; 
  }
  var arrayOfDigits = String(integer).split('').map(digit => parseInt(digit, 10));
  return arrayOfDigits.reduce((accum, value) => accum + value);
}

console.log(sum('hello')); // 'Argument must be a positive integer'
console.log(sum(1.5)); // 'Argument must be a positive integer'
console.log(sum(-1));  // 'Argument must be a positive integer'

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
