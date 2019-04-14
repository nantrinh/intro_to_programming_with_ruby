function logMatch(array, pattern) {
  return array.filter ((word) => pattern.test(word));
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(logMatch(words, /lab/));

// Output
// 'laboratory'
// 'flab'
// 'elaporate'
