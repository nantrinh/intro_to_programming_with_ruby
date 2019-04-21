function indexOf(firstString, secondString) {
  let i;
  let j;
  for (i = 0; i < firstString.length; i += 1) {
    if (firstString[i] == secondString[0]) {
      // if secondString is only one character, return immediately
      if (secondString.length == 1) {
        return i; 
      } 

      // else check if the entire secondString is present in firstString
      for (j = 1; j < secondString.length; j += 1) {
        if (firstString[i + j] == secondString[j]) {
          // we got to the end of secondString and we're still in this loop,
          // which means the entire secondString is present in firstString
          if (j == secondString.length - 1) {
            return i; 
          }
        } 
      }
    }
  }
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let i;
  let j;
  let k;
  let matchCount;
  for (i = firstString.length - 1; i >= 0; i -= 1) {
    matchCount = 0;
    k = 0;
    for (j = secondString.length - 1; j >= 0; j -= 1) {
      if (firstString[i - k] == secondString[j]) {
//      console.log(`i=${i} j=${j} k=${k}`);
//      console.log(`${firstString[i - k]} == ${secondString[j]}`);
        matchCount += 1; 
        k += 1;
      } else {
        break; 
      }
    }

    if (matchCount == secondString.length) {
//      console.log(`ending: i=${i} secondString length=${secondString.length}`);
      return i - (secondString.length - 1); 
    }
  }
  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale', 'Wha'));                  // 5 
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
