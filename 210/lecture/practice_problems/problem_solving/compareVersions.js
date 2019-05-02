function isValid(version) {
  return (typeof version === 'string' 
    && !/[^\d.]/g.test(version) 
    && version[0] !== '.'
    && version[version.length - 1] !== '.'
    && !(/\.\./.test(version))
  );
}

function removeEndingZeroes(array) {
  var i;
  var newEndingIndex;
  for (i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] !== 0) {
      newEndingIndex = i + 1;
      break;
    }
  }

  if (newEndingIndex !== undefined) {
    return array.slice(0, newEndingIndex); 
  } else {
    return array; 
  }
}

function compareVersions(version1, version2) {
  // if not valid, return null
  if (!isValid(version1) || !isValid(version2)) {
    return null; 
  }

  array1 = removeEndingZeroes(version1.split('.').map(Number));
  array2 = removeEndingZeroes(version2.split('.').map(Number));
  
  // split each version by period (.)
  // for each index in version1, compare with version2
  // if index of version1 > version2 return 1
  // if index of version1 < version2 return -1
  // if index version1 === version2 proceed to next index
  var shorterArray;
  var longerArray; 
  var shorterArrayLarger;
  var longerArrayLarger;
  var equal = 0;
  if (array1.length <= array2.length) {
    shorterArray = array1;
    longerArray = array2;
    shorterArrayLarger = 1;
    longerArrayLarger = -1;
  } else {
    shorterArray = array2;
    longerArray = array1;
    shorterArrayLarger = -1;
    longerArrayLarger = 1;
  }

  for (i = 0; i < shorterArray.length; i += 1) {
    if (shorterArray[i] < longerArray[i]) {
      return longerArrayLarger; 
    } else if (shorterArray[i] > longerArray[i]) {
      return shorterArrayLarger; 
    }
  }

  // if you have reached the end of version1 and version 1 and version 2 are still equal to each other, then version1 is the more recent version, so return -1
  // if you have reached the end and their lengths are equal, return 0
  return shorterArray.length === longerArray.length ? equal : longerArrayLarger;
}

// console.log(compareVersions('0.1x', '1')); // null 
// console.log(compareVersions('0?1', '1')); // null 
// console.log(compareVersions('1', [])); // null 
// console.log(compareVersions('a', '1')); // null 
// 
// console.log(compareVersions('1.0.0', '0.0.0')); // 1
// console.log(compareVersions('0.1', '1')); // -1
// console.log(compareVersions('1', '0.1')); // 1
// console.log(compareVersions('1', '1.0')); // 0 
// console.log(compareVersions('1.0', '1')); // 0 
// console.log(compareVersions('1', '1')); // 0 
// console.log(compareVersions('1.0', '1.1')); // -1 
// console.log(compareVersions('1.1', '1.2')); // -1 
// console.log(compareVersions('1.2.0.0', '1.2')); // 0 
// console.log(compareVersions('1.2.0.0', '1.18.2')); // -1 
// console.log(compareVersions('13.37', '1.18.2')); // 1 

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
