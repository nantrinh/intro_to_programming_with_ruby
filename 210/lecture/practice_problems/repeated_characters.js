function repeatedCharacters(string) {
  string = string.toLowerCase();
  let counts = {};
  let i;
  for (i = 0; i < string.length; i += 1) {
    if (counts[string[i]] === undefined) {
      counts[string[i]] = 1; 
    } else {
      counts[string[i]] += 1;
    }
  }
  for (letter in counts) {
    if (counts[letter] == 1) {
      delete counts[letter];
    } 
  }
  console.log(counts);
  return counts;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
