function isValidRangeString(rangeString, delimiters) {
  if (
    typeof rangeString !== 'string'
    || rangeString === ''
    || rangeString.split(delimiters).some(function (element) {
         return element === '' || /[^\d]/.test(element.trim()); 
       }) 
  ) {
    return false; 
  }
  return true;
}

function incrementUntilSignificantNext(previousNumber, significantNext) {
  var test = previousNumber;
  var stringTest = String(test);
  var stringSignificantNext = String(significantNext);
  var stringSignificantTest = stringTest.slice(stringTest.length - stringSignificantNext.length);
  while (stringSignificantTest !== stringSignificantNext) {
    test += 1; 
    stringTest = String(test);
    stringSignificantTest = stringTest.slice(stringTest.length - stringSignificantNext.length);
  }
  return test; 
}

function nextNumber(previousNumber, significantNext) {
  var digitsArray;
  var tensPlace;
  if (previousNumber < 10) {
    return 10 + significantNext; 
  } else {
    return incrementUntilSignificantNext(previousNumber, significantNext);
  }
}

function makeSignificantList(numbers) {
  var significantList= [numbers[0]];
  var previousNumber;
  numbers.slice(1).forEach(function (significantNext) {
    previousNumber = significantList[significantList.length - 1];
    if (previousNumber < significantNext) {
      significantList.push(significantNext); 
    } else {
      significantList.push(nextNumber(previousNumber, significantNext)); 
    }
  });
  return significantList;
}

function completeList(rangeString) {
  const DEFAULT = [];
  const FIRST_LEVEL_DELIMITERS = /,/;
  const SECOND_LEVEL_DELIMITERS = /:|\-|\.\./;
  var combined_delimiters = new RegExp(
    `${FIRST_LEVEL_DELIMITERS.source}|${SECOND_LEVEL_DELIMITERS.source}`
  )
  var firstLevelArray;
  var secondLevelArray;

  if (!isValidRangeString(rangeString, combined_delimiters)){
    return DEFAULT; 
  }

  firstLevelArray = rangeString.split(FIRST_LEVEL_DELIMITERS).map(element => element.trim());
  if (firstLevelArray.every(element => !(/[^\d]/.test(element)))) {
    return makeSignificantList(firstLevelArray.map(Number));
  } else {
    secondLevelArray = firstLevelArray.map(range => range.split(SECOND_LEVEL_DELIMITERS)); 
    significantSecond = secondLevelArray.map(sublist => makeSignificantList(sublist.map(Number)));
    return significantSecond;
  }
}

console.log(completeList('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]
console.log(completeList("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]
console.log(completeList("104-2")); // [104, 105, ... 112]
console.log(completeList("104-02")); // [104, 105, ... 202]
console.log(completeList("545, 64:11")); // [545, 564, 565, .. 611]

console.log(completeList("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(completeList("1:3, 1:2")); // [1, 2, 3, 11, 12]
console.log(completeList("1..3, 1..2")); // [1, 2, 3, 11, 12]

// using different separators in the same rangeString
console.log(completeList("1..3, 1:2")); // [1, 2, 3, 11, 12]
console.log(completeList("1-3, 1:2")); // [1, 2, 3, 11, 12]

// range ends in 0
console.log(completeList("1-0")); // [1, 2, 3, ..., 10]
// one element array
console.log(completeList("0-0")); // [0]
console.log(completeList("1-1")); // [1]
// starting number bigger than ending number
console.log(completeList("2-1")); // [2, 3, ..., 9, 10, 11]
// no delimiters
console.log(completeList("1")); // [1]

// invalid inputs: return empty array
// empty string
console.log(completeList('')); // []
// wrong delimiters
console.log(completeList('1...3')); // []
console.log(completeList('1.3')); // []
console.log(completeList('1--3')); // []
console.log(completeList('1::3')); // []
console.log(completeList('1,,3')); // []
// invalid characters
console.log(completeList('1%%3')); // []
console.log(completeList('abc')); // []
// data type is not string
console.log(completeList([])); // []
console.log(completeList({})); // []
console.log(completeList(23)); // []
console.log(completeList(null)); // []
console.log(completeList(true)); // []
//console.log(completeList());

