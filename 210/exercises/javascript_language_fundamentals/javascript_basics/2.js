var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // 'Hello', because true is truthy
}

if (!myString) {
  console.log('World'); // nothing gets logged because myString is truthy and ! negates it
}

if (!!myArray) {
  console.log('World'); // 'World', because !! coerces to the boolean value that myArray is evaluated to, so it is true
}

if (myOtherString || myArray) {
  console.log('!');  // '!', because even though empty strings are falsey, myArray is truthy
}
