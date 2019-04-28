function repeater (string) {
  return string.split('').map(character => character.repeat(2)).join(''); 
}

function doubleConsonants(string) {
  let regex = /[bcdfghjklmnpqrstvwxyz]/g;
  let chars = string.split('');
  let modifiedChars = chars.map(function(c) {
    if (c.toLowerCase().match(regex)) {
      return c.repeat(2);
    } else {
      return c;
    }
  });
  return modifiedChars.join(''); 
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
