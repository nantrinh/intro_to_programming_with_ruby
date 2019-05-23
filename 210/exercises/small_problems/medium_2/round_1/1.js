// returns object containing three properties
// count lowercase letters => compute percentage
// count uppercase letters => compute percentage
// 100 - sum of the other two percentages

function letterPercentages(string) {
  const DEFAULT = {
    lowercase: '0.00',
    uppercase: '0.00',
    neither: '0.00',
  };

  if (typeof string !== 'string' || string == '') {
    return DEFAULT; 
  }

  var countLowerCase = (string.match(/[a-z]/g) || []).length;
  var countUpperCase = (string.match(/[A-Z]/g) || []).length;

  var percentLowerCase = (countLowerCase / string.length) * 100;
  var percentUpperCase = (countUpperCase / string.length) * 100;
  var percentNeither = 100 - percentUpperCase - percentLowerCase;

  return {
    lowercase: percentLowerCase.toFixed(2),
    uppercase: percentUpperCase.toFixed(2),
    neither: percentNeither.toFixed(2),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
