function findFibonacciIndexByLength(length) {
  let index = 2;
  let current = 1;
  let prev = 1;
  let temp;

  while (String(current).length < length) {
    temp = current;
    current += prev;
    prev = temp;
    index += 1;
  } 
  console.log(index);
  return index;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
