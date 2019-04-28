var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is global'; references variable declared on line 1
// The function uses a local variable. This is an example of variable
// shadowing.
