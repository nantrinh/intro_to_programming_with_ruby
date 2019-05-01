function staggeredCase(string) {
  var upper = true;
  return string.split('').map(function (character) {
    if (/[a-z]/i.test(character)) {
      if (upper) {
        upper = false;
        return character.toUpperCase();
      } else {
        upper = true;
        return character.toLowerCase();
      }
    } else {
      return character; 
    }
  }).join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
