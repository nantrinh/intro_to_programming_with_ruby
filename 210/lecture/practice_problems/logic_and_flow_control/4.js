function fizzbuzz() {
  let min = 1;
  let max = 100;
  for (i = min; i <= max; i += 1) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz'); 
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i); 
    }
  }
}

fizzbuzz();
