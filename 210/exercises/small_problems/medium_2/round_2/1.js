// input: string
// output: object
//
// object should contain three properties
//   - lowercase
//   - uppercase
//   - neither
// values are strings of percentages (should be a 
// string representation of a float between 0 and 100 inclusive)
//
// validation
// input should be a string with at least one character
// else return 'Invalid input'
//
// use match method to count matches for lowercase and uppercase
// string.match(/[a-z]/g) || []
// string.match(/[A-Z]/g) || []
// get the length of the matches
// divide by the total length of the string, multiply result by 100
//
// neither = 100 - percentLowerCase - percentUpperCase
//
// return object with the three properties, and each percent.toFixed(2)

function letterPercentages(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return 'Invalid input'; 
  }

  var percentLowerCase = (
    (string.match(/[a-z]/g) || []).length / string.length
  ) * 100;

  var percentUpperCase= (
      (string.match(/[A-Z]/g) || []).length / string.length
  ) * 100;

  var percentNeither = 100 - percentLowerCase - percentLowerCase;

  return {
    lowercase: percentLowerCase.toFixed(2), 
    uppercase: percentUpperCase.toFixed(2), 
    neither: percentNeither.toFixed(2), 
  };
}

// can contain special characters, numbers, spaces
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('1'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('aB'));
// { lowercase: "50.00", uppercase: "50.00", neither: "0.00" }


// invalid
// other data types
// no argument passed
// empty string
console.log(letterPercentages(''));
console.log(letterPercentages(12));
console.log(letterPercentages({}));
console.log(letterPercentages());
