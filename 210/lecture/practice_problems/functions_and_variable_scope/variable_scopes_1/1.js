var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a); // 'outer'
testScope(); // 'inner'
console.log(a); // 'inner'
// Variable `a` within the function `testScope` is local
// and therefore contained within its scope. It "shadows"
// the variable defined on line 1, meaning, it overrides
// the variable defined on line 1 within the function scope.
