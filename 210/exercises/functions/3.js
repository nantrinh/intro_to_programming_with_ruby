var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);
// 'This is local'
// line 4 reassigns the string 'This is local' to the variable
// defined on line 1
