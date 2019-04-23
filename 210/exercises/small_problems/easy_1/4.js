let bill = Number(prompt('What is the bill? '));
let percent = Number(prompt('What is the tip percentage? '));
let tip = bill * percent / 100;
console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${(tip + bill).toFixed(2)}.`);
