function invoiceTotal(...args) {
  let i;
  let sum = 0;
  for (i = 0; i < args.length; i += 1) {
    sum += args[i];  
  }
  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
