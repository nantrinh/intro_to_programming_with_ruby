// if not a string datatype or empty string, return empty string
//
// initialize constant of the number words in array
//
// split sentence by spaces, into array of words
// use map on array, if not a number word, return itself
// else return its index in the number_words constant
// join the resulting array with a space

function wordToDigit(sentence) {
  const DEFAULT = '';
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
  var words;

  if (typeof sentence !== 'string' || sentence === '') {
    return DEFAULT; 
  }

  words = sentence.split(' ');
  return words.map(function (word) {
    if (NUMBER_WORDS.includes(word)) {
      return NUMBER_WORDS.indexOf(word); 
    }
    return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Hello tone')); // 'Hello tone'
console.log(wordToDigit('Hello there')); // 'Hello there'
console.log(wordToDigit('')); // ''
console.log(wordToDigit(1)); // ''
console.log(wordToDigit({})); // ''
