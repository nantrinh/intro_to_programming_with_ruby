const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

function isValid(integersArray) {
  if (!Array.isArray(integersArray)) {
    return false; 
  }

  return integersArray.every(function (value) {
    return (typeof value === 'number'
            && value % 1 === 0 
            && value >= 0
            && value <= 19 
           );
  });
}

function compareWords(firstDigit, secondDigit) {
  firstWord = WORDS[firstDigit];
  secondWord = WORDS[secondDigit];
  if (firstWord < secondWord) {
    return -1; 
  } else if (secondWord > firstWord) {
    return 1; 
  } else {
    return 0; 
  }
}

function alphabeticNumberSort(integersArray) {
  if (!isValid(integersArray)) {
    return 'Argument must be an array of integers between 0 and 19 inclusive'; 
  }

  if (integersArray.length === 0) {
    return []; 
  }

  return [...integersArray].sort(compareWords)
}

console.log(alphabeticNumberSort('hello')); // Error message
console.log(alphabeticNumberSort([1.5, 2])); // Error message
console.log(alphabeticNumberSort([1, 20])); // Error message
console.log(alphabeticNumberSort([-1, 1])); // Error message
console.log(alphabeticNumberSort([])); // []

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
