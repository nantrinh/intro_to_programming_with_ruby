// if divisible by 4 && divisible by 100 && evenly divisible by 400
//   leap year
// else if divisible by 4 && 100
//   not a leap year
// else if divisible by 4
//   leap year
// else
//   not a leap year

function isLeapYear(year) {
  if (typeof year !== 'number' || year <= 0) {
    console.log('Please enter a number greater than 0');
    return;
  }

  if (year % 400 == 0) {
    return true; 
  }
  else if (year % 100 == 0) {
    return false; 
  }
  else if (year % 4 == 0) {
    return true; 
  }
  else {
    return false; 
  }
}

console.log(isLeapYear(2016)     === true);
console.log(isLeapYear(2015)     === false);
console.log(isLeapYear(2100)     === false);
console.log(isLeapYear(2400)     === true);
console.log(isLeapYear(240000)   === true);
console.log(isLeapYear(240001)   === false);
console.log(isLeapYear(2000)     === true);
console.log(isLeapYear(1900)     === false);
console.log(isLeapYear(1752)     === true);
console.log(isLeapYear(1700)     === false);
console.log(isLeapYear(1)        === false);
console.log(isLeapYear(100)      === false);
console.log(isLeapYear(400)      === true);
