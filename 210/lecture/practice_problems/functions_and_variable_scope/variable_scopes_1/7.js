console.log(a);

function hello() {
  a = 1;
}

// ReferenceError
// this code is equivalent to
// ```
// function hello() {
//  a = 1;
// }
//
// console.log(a);
// ```
// the function is declared but never called,
// so `a` is never declared 
