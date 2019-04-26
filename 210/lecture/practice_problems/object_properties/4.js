function wordCount(string) {
  let i;
  let wordArray = string.split(' ')
  let result = {}
  for (i = 0; i < wordArray.length; i += 1) {
    if (Object.keys(result).includes(wordArray[i])) {
      result[wordArray[i]] += 1;
    } else {
      result[wordArray[i]] = 1; 
    } 
  }
  return result;
}

console.log(wordCount('box car cat bag box'));
// { box: 2, car: 1, cat: 1, bag: 1 }
