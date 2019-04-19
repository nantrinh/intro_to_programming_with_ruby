var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);

// equivalent to
// var a;
// a = 1;
// 
// 
// function foo() {
//   a = 2;
//   function bar() {
//     a = 3;
//     return 4;
//   }
// 
//   return bar();
// }
// 
// console.log(foo()); // 4; bar() returns 4
// console.log(a); // 3; foo() was called in the previous line, 
// and the variable declared on line 1 was reassigned to 2, then 3.



