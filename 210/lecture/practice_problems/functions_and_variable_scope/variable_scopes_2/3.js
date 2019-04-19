var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);
// 4
// After hoisting
// ```
// var a; 
// a = 'hello';
// 
// for (var i = 0; i < 5; i += 1) {
//   a = i;
// }
// 
// console.log(a);
// ```
// lines 11 and 14 are performing reassignment to same variable
