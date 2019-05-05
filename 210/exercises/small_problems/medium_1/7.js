function fibonacci(number) {
  const DEFAULT = 0;

  if (typeof number !== 'number' || number < 1) {
    return DEFAULT; 
  }
  
  var secondPrevious = 1;
  var firstPrevious = 1;
  var current;

  if (number <= 2) {
    return 1; 
  } else {
    for (i = 2; i < number; i += 1) {
      current = firstPrevious + secondPrevious;
      secondPrevious = firstPrevious;
      firstPrevious = current;
    }
    return current;
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 6765
console.log(fibonacci(100));      // 6765
