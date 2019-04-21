function gcd(int1, int2) {
  // check validity here
  if (int1 === int2) {
    return int1; 
  }
  for (i = Math.min(int1, int2); i >= 2; i -= 1) {
    if (int1 % i == 0 && int2 % i == 0) {
      return i; 
    } 
  }
  return 1; 
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(4, 2));    // 2
