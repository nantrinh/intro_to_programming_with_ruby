var firstName = 'Nancy';
var lastName = 'Trinh';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

var aIndex = language.indexOf('a'); // 1
var vIndex = language.indexOf('v'); // 2
console.log(language.substr(aIndex, 4)); // avaS
console.log(language.substr(vIndex, 4)); // vaSc

console.log(language.substring(aIndex, 4)); // ava
console.log(language.substring(vIndex, 4)); // va

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]); // J
console.log(fact2[0]); // K

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

var boxNumber = (356).toString();
console.log(boxNumber);
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);  // number
boxNumber = String(boxNumber);
console.log(typeof boxNumber);  // string 

var name = prompt('What is your name? ');
if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
