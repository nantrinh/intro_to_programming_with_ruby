function stringy(num) {
  let i;
  let result = '';
  for (i = 0; i < num; i += 1) {
    if (i % 2 == 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  console.log(`"${result}"`);
  return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
