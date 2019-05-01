// Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

var sampleText = '{word} this is. &this also! %also this?'

function longestSentence(text) {
  var sentenceArray = text.match(/\w.*?[.!?]/g);
  console.log(sentenceArray);

  var longest = sentenceArray.reduce(function (longest, currentSentence) {
    return wordCount(longest) > wordCount(currentSentence) ? longest : currentSentence;
  });

  console.log(longest);
  console.log('The longest sentence has ' + String(wordCount(longest)) + ' words.');
}

function wordCount(sentence) {
  return sentence.split(' ').length;
}

longestSentence(sampleText);
