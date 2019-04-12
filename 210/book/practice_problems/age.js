let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
