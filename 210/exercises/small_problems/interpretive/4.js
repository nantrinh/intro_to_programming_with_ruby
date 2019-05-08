function encryptLetter(letter, key) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  var originalIndex = ALPHABET.indexOf(letter);
  return ALPHABET[Math.floor((originalIndex + key) % ALPHABET.length)];
}

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

// invalid message
console.log(caesarEncrypt('', 1));
console.log(caesarEncrypt(123, 2));
console.log(caesarEncrypt([], 2));
// invalid key
console.log(caesarEncrypt('abc', -2));
console.log(caesarEncrypt('abc', 'abc'));
console.log(caesarEncrypt('abc', 2.5));

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?); Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
