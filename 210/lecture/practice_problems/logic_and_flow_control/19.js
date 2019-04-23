function substring(string, start, end) {
  let i;
  let result = '';
  let temp;

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start == end) {
    return ''; 
  }

  if (end === undefined) {
    end = string.length; 
  }

  if (start < 0 || start === NaN) {
    start = 0; 
  }

  if (end < 0 || end === NaN) {
    end = 0; 
  }

  for (i = start; i < end && i < string.length; i += 1) {
    result += string[i]; 
  }

  console.log('"' + result + '"');
  return result;
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"
