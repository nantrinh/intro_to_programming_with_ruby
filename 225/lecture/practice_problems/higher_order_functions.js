// either take a function as an argument, return a function, or both
// var numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function (x) {
//     return x % 2 === 0; 
//   };
// }
// 
// var checkEven = makeCheckEven();
// 
// console.log(numbers.filter(checkEven)); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }
// 
// var res;
// res = execute(function(number) {
//   return number * 2;
// }, 10); // 20
// console.log(res);
// 
// res = execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"
// 
// console.log(res);

function makeListTransformer(func) {
  return function(array) {
    return array.map(func); 
  }
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
