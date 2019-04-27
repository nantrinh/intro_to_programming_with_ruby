function swap(string) {
  let words = string.split(' '); 
  let temp;
  let letters;
  let swapped = words.map (function (word) {
    letters = word.split('');
    temp = letters[0];
    letters[0] = letters[letters.length - 1];
    letters[letters.length - 1] = temp;
    return letters.join(''); 
  });
  return swapped.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
