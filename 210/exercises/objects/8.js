function penultimate(string) {
//  return string.split(' ')[-2];
  let arr = string.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
// Negative indexes do not select the nth to last elements.
// They will return undefined in the code above.
// To select the second to last element in an array, use
// let arr = string.split(' ');
// return arr[arr.length - 2];
