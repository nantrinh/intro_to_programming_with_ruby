function trim(string) {
  // two for loops
  // one starts from beginning of string, stops at first non-space character
  // save start index
  // second starts from end of string, stops at first non-space character encountered going backwards
  // save end index
  // slice the string from start to end index; return it
  let start;
  let end;
  let i;
  for (i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      start = i;
      break;
    } 
  }

  for (i = string.length - 1; i >= 0; i -= 1) {
    if (string[i] !== ' ') {
      end = i;
      break;
    } 
  }

  // console.log(`start=${start} end=${end}`);
  // return string.slice(start, end + 1);
  // or this, if we are not allowed to use slice
  let result = '';
  for (i = start; i <= end; i += 1) {
    result += string[i]; 
  } 
  return result;
}
console.log(trim('  abc  ')  == "abc");
console.log(trim('abc   ')   == "abc");
console.log(trim(' ab c')    == "ab c");
console.log(trim(' a b  c')  == "a b  c");
console.log(trim('      ')   == "");
console.log(trim('')         == "");
