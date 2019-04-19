var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // 'outer'
testScope(); // 'inner'
console.log(a); // 'inner'
// line 8 refers to the variable defined on line 1, with value 'outer'
// line 9 calls the `testScope` function, which reassigns the value
// `'inner'` to the variable `a` and then logs its value. the function
// scope has access to variables within its scope and those defined
// in an outer scope.
// line 10 logs the new value of `a`, 'inner'
