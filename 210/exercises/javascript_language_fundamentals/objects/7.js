function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

// The arguments object is array-like. You can access arguments passed
// to the function using a zero-based index.
// In the code here, the second argument is a boolean so you can use
// it as a condition in a ternary operator.
// If the boolean is true, then you can return the result of dividing the
// first argument, which is supposed to be a number, by 2, otherwise return 0.
