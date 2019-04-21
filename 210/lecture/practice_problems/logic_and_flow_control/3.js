function valid(number, min, max) {
  return typeof number == 'number' && number > min && number < max && number % 1 == 0;
}

// console.log(valid(10, 0, 100));
// console.log(valid(50, 0, 100));
// console.log(valid(3.3, 0, 100));
// console.log(valid(-3.3, 0, 100));
// console.log(valid(123.3, 0, 100));
// console.log(valid('3.3', 0, 100));


function logMultiples(number) {
  let min = 0;
  let max = 100;
  if (!valid(number, min, max)) { 
    console.log("Input must be an integer between 0 and 100");
    return;
  }
  let largest_multiple = number * Math.floor(max/number)
  for (i = largest_multiple; i >= number; i -= number) {
    if (i % 2 != 0) {
      console.log(i); 
    }
  }
}

logMultiples(17);
logMultiples(21);
logMultiples(55.5);
