function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 == 0)) {
    return false; 
  }

  for (i = 2; i < number; i += 1) {
    if (number % i == 0) {
      return false; 
    }
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(0));   // false
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
