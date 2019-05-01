function swapCase(string) {
  return string.split('').map(function (character) {
    return /[a-z]/.test(character) ? character.toUpperCase() : character.toLowerCase()
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
