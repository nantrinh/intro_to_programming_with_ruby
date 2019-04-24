function join(array, separator) {
  let i;
  result = '';
  for (i = 0; i < array.length; i += 1) {
    result += array[i]; 
    if (i < array.length - 1) {
      result += separator;
    }
  }
  return result;
}
console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
