// var myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };
// 
// var prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';
// 
// console.log(myObject[prop2]);
// // '678'
// 
// console.log(myObject.prop2);
// // '456'

// The names of the properties are strings. On line 8 you are reassinging the
// value of the 'prop2' property to '456'.
// On line 9, you are adding a new property {'456': '678'} to myObject. This is
// because you declared and initialized the variable `prop2` to the value '456'
// on line 7, and line 9 references that variable.

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
// {funcprop: 'hello, '}
myObj[myFunc()] = 'world!';

console.log(myObj);
// {funcprop: 'world!'}
