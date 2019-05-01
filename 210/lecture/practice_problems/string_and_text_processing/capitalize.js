var text = 'The quick brown fox jumps over the lazy dog.';

function capitalizeEachWord(sentence) {
  return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeEachWord(text));
