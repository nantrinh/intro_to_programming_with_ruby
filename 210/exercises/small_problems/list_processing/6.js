function substringsAtStart(string) {
  var substrings = string.split('').map(function (character, index) {
    return string.slice(0, index + 1);
  });
  return substrings.sort((a, b) => a.length - b.length);
}

function substrings(string) {
  return string.split('').map(function (character, index) {
    return substringsAtStart(string.slice(index)); 
  }).flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
