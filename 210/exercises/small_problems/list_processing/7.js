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

function isPalindrome(word) {
  return word.length > 1 && (word === word.split('').reverse().join(''));
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
