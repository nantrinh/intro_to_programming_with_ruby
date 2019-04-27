function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let age;
let i;
for (i = 0; i <= 50; i += 1) {
  age = Math.floor(getRandomArbitrary(20, 201));
  console.log(`Teddy is ${age} years old!`);
}

// 20..100
// random => 0...1 => 0...80
