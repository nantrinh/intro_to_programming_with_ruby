function arrayToString(array) {
  let i;
  let result = '';
  for (i = 0; i < array.length; i += 1) {
    result += String(array[i]); 
  }
  return result;
}

console.log(arrayToString([1, 'a', 4]) === '1a4');
