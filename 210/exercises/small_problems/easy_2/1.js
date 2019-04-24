function crunch(string) {
  if (string === '') {
    return string; 
  }
  let prev = string[0];
  let i; 
  let result = string[0];
  for (i = 1; i < string.length; i += 1) {
    if (string[i] !== prev) {
      result += string[i];
      prev = string[i];
    } 
  }
  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
