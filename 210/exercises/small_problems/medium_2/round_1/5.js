// odd number
// multiple of 7
// all digits occur only once each
//
// 12 / 7 => 1, 5 
// next odd multiplier is 3 => 7 * 3 = 21 
//
// 20 / 7 => 2, 6
// next odd multiplier is 3 => 7 * 3 = 21
//
// 21 / 7 => 3
// next odd multiplier is 5
//
// 997 / 7 => 142, stuff
// next odd multiplier is 143 => 143 * 7 = 1001
// 1001 has 0 twice
// next odd multiplier is 145 => 145 * 7 = 1015
// 1015 has 1 twice
// 147 * 7 = 1029, meets all requirements
//
// divide by 7, floor it => multiplier
// increment multiplier to get next odd multiplier (by 2 if it's odd, 1 if it's even)
// multiply by 7, does it fit all requirements? if not, increment multiplier again 

function nextOddMultiplier(multiplier) {
  return multiplier % 2 === 0 ? multiplier + 1 : multiplier + 2;
}

function allUniqueDigits(number) {
  var stringNumber = String(number);
  var seen = [];
  for (i = 0; i < stringNumber.length; i += 1) {
    if (seen.includes(stringNumber[i])) {
      return false; 
    }
    seen.push(stringNumber[i]);
  }
  return true;
}

function isFeatured(number) {
  return (number % 2 !== 0 && number % 7 === 0 && allUniqueDigits(number)); 
}
 
function featured(number) {
  if (typeof number !== 'number') {
    return 'Input must be a Number';
  }

  var multiplier = Math.floor(number / 7);  
  var testMultiplier = nextOddMultiplier(multiplier);
  var testResult = testMultiplier * 7;
  while (!isFeatured(testResult)) {
    if (String(testResult).length > 10) {
      return 'No next featured number'; 
    }
    testMultiplier = nextOddMultiplier(testMultiplier);
    testResult = testMultiplier * 7;
  } 

  return testResult;  
}

console.log(featured(0));            // 7 
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(10234569870));    // no next featured number 

console.log(featured([])); // 'input must be a number'
console.log(featured('10')); // 'input must be a number'
console.log(featured({})); // 'input must be a number'
