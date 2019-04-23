function toLowerCase(string) {
  // declare result variable = empty string
  // step through each character
  // if it is uppercase, convert it
  // add it to result
  let result = '';
  for (i = 0; i < string.length; i += 1) {
    asciiNumeric = string.charCodeAt(i);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      result += String.fromCharCode(asciiNumeric + 32); 
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(toLowerCase('ALPHABET') === "alphabet");
console.log(toLowerCase('123')      === "123");
console.log(toLowerCase('abcDEF')   === "abcdef");
