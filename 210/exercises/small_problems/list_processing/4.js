function sumOfSums(numbersArray) {
  var sums = [numbersArray[0]];
  numbersArray.forEach(function (number, index) {
    if (index > 0) {
      sums.push(number + sums[sums.length - 1]);  
    }
  });
  return sums.reduce((accum, sum) => accum + sum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
