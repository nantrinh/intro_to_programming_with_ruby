// test validity functions; should all log true
console.log(isValidMonth('') === true);
console.log(isValidMonth('12') === true);
console.log(isValidMonth('1') === true);
console.log(isValidMonth('1.5') === false );
console.log(isValidMonth('-1') === false );
console.log(isValidMonth('0') === false );
console.log(isValidMonth('13') === false );
console.log(isValidMonth('abc') === false );

console.log(isValidYear('') === true );
console.log(isValidYear('0') === true );
console.log(isValidYear('1') === true );
console.log(isValidYear('2001') === true );
console.log(isValidYear('-2001') === false );
console.log(isValidYear('abc') === false );
console.log(isValidYear('2.5') === false );

console.log(isValidTitle('abc') === true);
console.log(isValidTitle('AbC') === true);
console.log(isValidTitle('A') === true);
console.log(isValidTitle('&') === true);
console.log(isValidTitle('1') === true);
console.log(isValidTitle('') === false );

console.log(isValidDescription('abc') === true);
console.log(isValidDescription('AbC') === true);
console.log(isValidDescription('A') === true);
console.log(isValidDescription('&') === true);
console.log(isValidDescription('1') === true);
console.log(isValidDescription('') === false );
