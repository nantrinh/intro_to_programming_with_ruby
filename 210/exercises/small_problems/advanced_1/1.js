

function random(array) {
  random_index = Math.floor(Math.random() * array.length);
  return array[random_index];
}

function madlibs(template) {
  var REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry', 'pretty', 'joyful', 'green', 'bright'],
    noun: ['fox', 'dog', 'rabbit', 'book', 'plant', 'shelf', 'hat', 'rug', 'street'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats', 'hugs', 'pets', 'paints'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly', 'cautiously', 'randomly', 'questioningly'],
  };

  function replaceText(match) {
    term = match.replace(/[^a-z]/g, '');
    return random(REPLACEMENT_TEXTS[term]);
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}

template1 = 'The ${adjective} brown ${noun} ${adverb}\n${verb} the ${adjective} yellow\n${noun}, who ${adverb} ${verb} his\n${noun} and looks around.\n';

template2 = 'The ${noun} ${verb} the ${noun}\'s ${noun}.\n';

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
