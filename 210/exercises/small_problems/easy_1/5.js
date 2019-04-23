let integer;
let option;

function sumUpTo(integer) {
  let i;
  let result = 0;
  for (i = 1; i <= integer; i += 1) {
    result += i;
  } 
  return result;
}

function productUpTo(integer) {
  let i;
  let result = 1;
  for (i = 1; i <= integer; i += 1) {
    result *= i;
  } 
  return result;
}

do {
  integer = parseInt(prompt('Please enter an integer greater than 0: '));
} while (integer < 0);

do {
  option = prompt('Enter "s" to compute the sum, or "p" to compute the product. ');
} while (option !== 's' && option !== 'p');

if (option == 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sumUpTo(integer)}.`);
} else if (option == 'p') {
  console.log(`The product of the integers between 1 and ${integer} is ${productUpTo(integer)}.`);
}

