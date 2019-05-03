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

function incrementUntilSignificantNext(stringPrevious, stringSignificantNext, saveIterations) {
  var stringTest = String(Number(stringPrevious) + 1);
  var stringSignificantTest = stringTest.slice(stringTest.length - stringSignificantNext.length);
  var result = [];
  while (stringSignificantTest !== stringSignificantNext) {
    if (saveIterations) {
      result.push(stringTest); 
    }
    stringTest = String(Number(stringTest) + 1); 
    stringSignificantTest = stringTest.slice(stringTest.length - stringSignificantNext.length);
  }
  result.push(stringTest);
  return result; 
}

function makeList(stringNumbers, save) {
  var result = [stringNumbers[0]];
  var previousStringNumber;
  stringNumbers.slice(1).forEach(function (significantNext) {
    previousStringNumber = result[result.length - 1];
    result = result.concat(incrementUntilSignificantNext(previousStringNumber, significantNext, save)); 
  });
  return result;
}

function makeListAndHandleSubArrays(secondLevelArray) {
  var result = [];
  secondLevelArray.forEach(function (sublist, index) {
    if (index > 0) {
      previous = result[result.length - 1];
      current = sublist[0];
      sublist[0]  = incrementUntilSignificantNext(previous, current, false)[0]
    }
    result = result.concat(makeList(sublist, true).flat());
  });
  return result;
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
  var result;

  if (!isValidRangeString(rangeString, combined_delimiters)){
    return DEFAULT; 
  }

  firstLevelArray = rangeString.split(FIRST_LEVEL_DELIMITERS).map(element => element.trim());
  if (firstLevelArray.every(element => !(/[^\d]/.test(element)))) {
    result = makeList(firstLevelArray, false);
  } else {
    secondLevelArray = firstLevelArray.map(range => range.split(SECOND_LEVEL_DELIMITERS)); 
    result = makeListAndHandleSubArrays(secondLevelArray);
  }
  //console.log('**************FINAL ANSWER**********')
  return result.map(Number);
}

console.log(completeList('1, 3, 7, 2, 4, 1')); // [1, 3, 7, 12, 14, 21]
console.log(completeList("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]
console.log(completeList("104-2")); // [104, 105, ... 112]
console.log(completeList("104-02")); // [104, 105, ... 202]
console.log(completeList("545, 64:11")); // [545, 564, 565, .. 611]

console.log(completeList("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(completeList("1:3, 1:2")); // [1, 2, 3, 11, 12]
console.log(completeList("1..3, 1..2")); // [1, 2, 3, 11, 12]

// 3 or more arguments
console.log(completeList("1..3, 1..2, 1..2")); // [1, 2, 3, 11, 12, 21, 22]

// using different separators in the same rangeString
console.log(completeList("1..3, 1:2")); // [1, 2, 3, 11, 12]
console.log(completeList("1-3, 1:2")); // [1, 2, 3, 11, 12]

// range ends in 0
console.log(completeList("1-0")); // [1, 2, 3, ..., 10]
// same number to same number 
console.log(completeList("0-0")); // [0, 1, 2, ..., 10]
console.log(completeList("1-1")); // [1, 2, 3, ..., 11]
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
console.log(completeList()); // []

