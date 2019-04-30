function anagram(wordToMatch, list) {
  var isAnagram = function (word1, word2) {
    return word1.split('').sort().join('') ===  word2.split('').sort().join('');
  }

  return list.filter(word => isAnagram(word, wordToMatch));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
