var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// outer
// outer
// outer
// inner; on line 12, the variable b declared on
// line 2 is reassigned the value 'inner'
