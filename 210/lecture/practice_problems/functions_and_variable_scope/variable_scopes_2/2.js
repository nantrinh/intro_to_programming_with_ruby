function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
// 'hello'
// ReferenceError
// this code is equivalent to
// ```
// function hello() {
//   var a;
//   a = 'hello';
//   console.log(a);
// 
//   if (false) {
//     a = 'hello again';
//   }
// }
// hello();
// console.log(a);
// ```
// the variable a is only available within the function scope

