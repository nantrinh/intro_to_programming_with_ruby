function combinedArray(even, odd) {
  let i;
  let newArr = [];

  for (i = 0; i < even.length; i += 1) {
    newArr.push(even[i]); 
    newArr.push(odd[i]); 
  }

  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));
// returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]
