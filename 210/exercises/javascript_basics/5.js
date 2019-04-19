var number1 = prompt('Enter the first number:');
var number2 = prompt('Enter the second number:');
number1 = parseInt(number1, 10);
number2 = parseInt(number2, 10);

// prompt returns strings, so we must first convert them to numbers before
// performing the operations below
// otherwise, + would result in concatenation
// and the rest would throw an error

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// Enter the first number: 23
// Enter the second number: 17
// 
// 23 + 17 = 40
// 23 - 17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4105003956066297e+23
