function isDoubleNumber(num) {
  let string = String(num);
  let firstHalf = string.substring(0, string.length / 2);
  let secondHalf = string.substring(string.length / 2)
  return (string.length % 2 == 0) && (firstHalf === secondHalf);
}

function twice(num) {
  if (isDoubleNumber(num)) {
    return num; 
  } else {
    return num * 2; 
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
