var BLOCKS = ['BO',
              'XK',
              'DQ',
              'CP',
              'NA',
              'GT',
              'RE',
              'FS',
              'JW',
              'HU',
              'VI',
              'LY',
              'ZM']

function isBlockWord(word) {
  var matches;
  for (i = 0; i < BLOCKS.length; i += 1) {
    block = BLOCKS[i];
    matches = word.match(new RegExp(`[${block}]`, 'gi')) || [];
    if (matches.length > 1) {
      return false; 
    } 
  };
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

