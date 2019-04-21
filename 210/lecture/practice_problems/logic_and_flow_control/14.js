function splitString(string, delimiter) {
  // declare a variable to hold each string, build it as you
  // iterate through the characters in the string
  // log the string and reset the variable when you encounter a delimiter 
  // or when you reach the end of the string
  let temp_string = '';
  let i;
  switch (delimiter) {
    case undefined:
      console.log('ERROR: No delimiter'); 
      break;
    case '':
      for (i = 0; i < string.length; i += 1) { 
        console.log(string[i]);
      }
      break;
    default:
      for (i = 0; i < string.length; i += 1) {
        if (string[i] == delimiter) {
          console.log(temp_string);
          temp_string = '';
        } else if (i == string.length - 1){
          temp_string += string[i]; 
          console.log(temp_string);
        } else {
          temp_string += string[i]; 
        }
      }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

console.log('---');
splitString('hello');
// logs:
// ERROR: No delimiter

console.log('---');
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

console.log('---');
splitString('hello', ';');
// logs:
// hello

console.log('---');
splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
