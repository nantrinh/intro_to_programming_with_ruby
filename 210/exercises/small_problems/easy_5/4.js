function centerOf(string) {
  let midpoint = Math.floor(string.length / 2); 
  if (string.length % 2 === 0) {
    return string.slice(midpoint - 1, midpoint + 1);
  } else {
    return string[midpoint];
  }
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log('*' + centerOf('Launch School') + '*');    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"

// 'hello'
// 5 / 2 = 2.5
// return index 2

// 'what'
// 4 / 2 = 2
// 'what'.slice(1, 3)

// 'icecre'.slice(2, 4)
// 6 / 2 = 3
