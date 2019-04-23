function startsWith(string, searchString) {
  // declare var to keep track of index
  // create a for loop, step through both the string and
  // searchString; if the characters at the same index do
  // not match, return false
  // else if you have gotten to the end of the searchString,
  // return true
  let i;
  for (i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false; 
    } 
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We')     === true);
console.log(startsWith(str, 'We put') === true);
console.log(startsWith(str, '')       === true);
console.log(startsWith(str, 'put')    === false);

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) === false);
