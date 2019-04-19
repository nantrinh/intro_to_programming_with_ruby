function hello() {
  var a = 'hello';
}

hello();
console.log(a);
// ReferenceError, because the `a` defined on line 2 is local
// and not accessible outside of its scope
