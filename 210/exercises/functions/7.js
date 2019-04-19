var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
// 7
// arguments have local scope
// when the argument has the same name as a variable in outer scope, 
// variable shadowing occurs. this is because JS has lexical scoping.
// It looks for a variable of that name in the local scope before
// looking in outer scopes. It returns the first one it finds.
// here it finds `a` in the scope of the function so doesn't look 
// any further
