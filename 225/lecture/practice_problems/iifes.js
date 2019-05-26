// no there aren't surrounding parentheses, you get a syntax error
//
// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }());

// var sum = 0;
// var numbers;
// 
// sum += 10;
// sum += 31;
// 
// numbers = [1, 7, -3, 3];
// 
// sum += (function (arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }(numbers));
// 
// console.log(sum);

function countdown(count) {
  (function (number) {
    while (number >= 0) {
      console.log(number); 
      number -= 1;
    }
  
    console.log('Done!');
  }(count));
}

countdown(7);
