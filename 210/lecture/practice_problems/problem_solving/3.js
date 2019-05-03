function isBlockWord(word) {
  // input: string
  // output: boolean
  //
  // case insensitive
  // for each block, the word may not contain both letters from the block
  //
  // initialize constant holding the blocks as as array of arrays
  // make the word uppercase
  // for each subarray in array, return false if word contains both letters
  // otherwise after iterating through all of the blocks, return false
  const BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                  ['V', 'I'], ['L', 'Y'], ['Z', 'M']]
  var notBlocks = new RegExp(`[^${BLOCKS.flat().join('')}]`, 'gi');

  if (
    typeof word !== 'string'
    || word === '' 
    || notBlocks.test(word)
  ) {
    return false; 
  } 

  var blockPattern;
  var matches;
  for (i = 0; i < BLOCKS.length; i += 1) {
    blockPattern = new RegExp(`[${BLOCKS[i].join('')}]`, 'gi');
    matches = word.match(blockPattern) || 0;
    if (matches.length > 1) {
      return false; 
    }
  }
  return true;
}

// not String data type
console.log(isBlockWord(['a', 'b'])); // false
console.log(isBlockWord({})); // false
console.log(isBlockWord(12)); // false
console.log(isBlockWord(0)); // false

// empty String
console.log(isBlockWord('')); // false

// contains characters not included in blocks
console.log(isBlockWord('ABC123')); // false
console.log(isBlockWord('%$* ABC123')); // false

// case insensitive
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('bATcH'));      // true
console.log(isBlockWord('jest'));       // true

console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('zare'));       // false 
console.log(isBlockWord('nax'));        // false

