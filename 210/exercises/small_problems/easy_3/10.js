function wordSizes(string) {
  let words = string.split(' '); 
  let counts = {};
  let wordLength;
  for (i = 0; i < words.length; i += 1) {
    wordLength = words[i].replace(/[^a-zA-Z]/g, '').length;
    if (Object.keys(counts).includes(String(wordLength))) {
      counts[wordLength] += 1; 
    } else {
      counts[wordLength] = 1; 
    }
  }
  return counts;
}

console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));
// { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));
// {}
