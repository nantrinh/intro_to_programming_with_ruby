function asciiValue(string) {
  let i;
  let result = 0;
  for (i = 0; i < string.length; i += 1) {
    result += string.charCodeAt(i); 
  }
  console.log(result);
  return result;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
