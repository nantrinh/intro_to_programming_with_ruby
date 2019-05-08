

function caesarEncrypt(message, key) {
  if (typeof message !== 'string' || message.length === 0) {
    return 'Message must be a non-empty string.';
  } 

  if (typeof key !== 'number' || key < 0 || key % 1 !== 0) {
    return 'Key must be a positive integer.'; 
  }

  if (key === 0) {
    return message; 
  }

  return message.split('').map(function (character) {
    if (/[a-z]/.test(character)) {
      return encryptLetter(character, key); 
    } else if (/[A-Z]/.test(character)) {
      return encryptLetter(character.toLowerCase(), key).toUpperCase(); 
    } else {
      return character; 
    }
  }).join('');
}

function vigenereEncrypt(message, keyword) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

  function encryptLetter(letter, key) {
    var originalIndex = ALPHABET.indexOf(letter);
    return ALPHABET[Math.floor((originalIndex + key) % ALPHABET.length)];
  }

  if (
    typeof message !== 'string'
    || message.length === 0
    || typeof keyword !== 'string'
    || keyword.length === 0

  ) {
    return 'Message and keyword must be non-empty strings.';
  } 

  keyword = keyword.toLowerCase();
  var keyIndex = 0;
  var key;
  return message.split('').map(function (character) {
    if (/[a-z]/gi.test(character)) {
      key = ALPHABET.indexOf(keyword[keyIndex % keyword.length]); 
      keyIndex += 1;
      if (/[A-Z]/.test(character)) {
        return encryptLetter(character.toLowerCase(), key).toUpperCase(); 
      }
      return encryptLetter(character, key); 
    } else {
      return character; 
    }
  }).join('');
} 

// invalid message
// console.log(vigenereEncrypt('', 1));
// console.log(vigenereEncrypt(123, 2));
// console.log(vigenereEncrypt([], 2));
// // invalid key
// console.log(vigenereEncrypt('abc', ''));
// console.log(vigenereEncrypt('abc', 12));
// console.log(vigenereEncrypt('abc', [2]));

// simple shift
// console.log(vigenereEncrypt('A', 'a'));       // "A"
// console.log(vigenereEncrypt('A', 'c'));       // "C"
//  console.log(vigenereEncrypt('A', 'C'));       // "C"
// 
// // wrap around
// console.log(vigenereEncrypt('y', 'e'));       // "c"
//  console.log(vigenereEncrypt('a', 'v'));      // "v"
// 
// // all letters
// console.log(vigenereEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'z'));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// 
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

