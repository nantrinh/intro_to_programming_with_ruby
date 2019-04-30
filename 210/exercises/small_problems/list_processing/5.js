function substringsAtStart(string) {
  // initialize array to hold substrings
  var substrings = [];
  // iterate through string characters
  // for each character, concatenate last element of substring array with it and push it to substring array
  string.split('').forEach(function (character, index) {
    if (index === 0) {
      substrings.push(character);
    } else {
      substrings.push(substrings[substrings.length - 1] + character);
    }
  });
  // sort substring array, order by length shortest to longest
  substrings.sort((a, b) => a.length - b.length);
  return substrings;
} 

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
