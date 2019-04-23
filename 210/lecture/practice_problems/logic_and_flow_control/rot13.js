function makeAlphabet() {
  var alphabet = '';
  for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i += 1) {
    alphabet += String.fromCharCode(i); 
  }
  return alphabet;
}

function rotLetter(letter, offset) {
  const ALPHABET = makeAlphabet(); 
  return ALPHABET[(ALPHABET.indexOf(letter) + offset) % ALPHABET.length];
}

function rot13(string) {
  const OFFSET = 13;
  var i;
  var newString = '';
  for (i = 0; i < string.length; i += 1) {
    if (string[i] >= 'A' && string[i] <= 'Z')
      newString += rotLetter(string[i].toLowerCase(), OFFSET).toUpperCase();
    else if (string[i] >= 'a' && string[i] <= 'z') {
      newString += rotLetter(string[i], OFFSET);
    } else {
      newString += string[i]; 
    }
  }
  return newString;
}

// console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');

// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === "Teachers open the door, but you must enter by yourself.");
