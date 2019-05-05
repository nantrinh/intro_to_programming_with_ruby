var fibonacci_numbers = [1, 1];

function fibonacci(number) {
  const DEFAULT = 0;

  if (typeof number !== 'number' || number < 1) {
    return DEFAULT; 
  }
  
  if (fibonacci_numbers.length >= number) {
    return fibonacci_numbers[number - 1]; 
  } else {
    until (fibonacci_numbers.length === number) {
      fibonacci_numbers.push(fibonacci_numbers.slice(fibonacci_numbers.length - 2).reduce((a, b) => a + b));
    }
    return fibonacci_numbers[fibonacci_numbers.length - 1];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(100));     // 354224848179262000000
