function staggeredCase(string) {
  return string.split('').map(function (character, index) {
    if (/[a-z]/i.test(character)) {
      if (index % 2 === 0) {
        return character.toUpperCase(); 
      } else {
        return character.toLowerCase(); 
      }
    } else {
      return character; 
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
