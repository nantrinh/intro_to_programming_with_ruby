function substr(string, start, length) {
  let i;
  let result = '';
  if (length === undefined) {
    length = string.length; 
  }
  if (start < 0) {
    start += string.length;
  }
  for (i = start; i < string.length && result.length < length; i += 1) {
    result += string[i];
  }
  return result;
}

var string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log(substr(string, 8, 20) === "rld");
console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");
console.log(string.substr(1) === "ello world");
