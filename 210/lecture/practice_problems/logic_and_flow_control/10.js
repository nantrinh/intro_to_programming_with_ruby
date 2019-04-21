function checkGoldbach(n) {
  if (n % 2 !== 0 || n < 4) {
    console.log(null); 
    return;
  }
  else {
    for (let i = 2; i <= Math.floor(n / 2); i += 1) {
      if (isPrime(i) && isPrime(n - i)) {
        console.log(`${i} ${n - i}`); 
      } 
    }
  }
}

function isPrime(n) {
  if (n <= 1 || (n % 2 === 0 && n > 2)) {
    return false; 
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false; 
    } 
  } 
  return true;
}
checkGoldbach('2'); // null
checkGoldbach(11); // null
checkGoldbach(2); // null
checkGoldbach(3); // null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
