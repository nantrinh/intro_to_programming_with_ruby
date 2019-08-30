function indexesOfMatches(str, letter) {
  var indexes = [];
  var i;
  for (i=0; i < str.length ; i++) {
    if (str[i] === letter) {
      indexes.push(i); 
    }
  } 
  return indexes;
};

var randomWord = (function() {
  var words = ["apple", "banana", "orange", "pear"];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)]; 
    words.splice(words.indexOf(word), 1);
    return word;
  };
})();

$(function () {
  function Game() {
    this.word = randomWord(); 
    this.incorrect = 0;
    this.mistakes_left = 6;
    this.letters_guessed = new Set();
    this.correct_spaces = 0;
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!"); 
      return;
    }
    //this.word = this.word.split("");
    this.init();
  };

  Game.prototype = {
    createBlanks: function() {
      var spaces = (new Array(this.word.length + 1)).join("<span></span>"); 
      $letters.find("span").remove();
      $letters.append(spaces);
      this.$spaces = $("#spaces span");
    },
    displayMessage: function(text) {
      $message.text(text);
      $message.removeClass("invisible");
    },
    init: function() {
      this.createBlanks(); 
      $play_again.addClass("invisible");
    }
  }

  var $message = $("#message");
  var $letters= $("#spaces");
  var $guesses = $("#guesses");
  var $apples = $("#apples");
  var $play_again = $("#replay");

  var game = new Game();

  $(document).keypress(function(e) {
    if (e.keyCode >= 97 && e.keyCode <= 122) {
      $message.addClass("invisible");
      var letter = String.fromCharCode(e.keyCode);
      if (game.letters_guessed.has(letter)) {
        game.displayMessage(`You have already guessed "${letter.toUpperCase()}".`);
      } else {
        game.letters_guessed.add(letter);
        var indexes = indexesOfMatches(game.word, letter);
        if (indexes.length > 0) {
          indexes.forEach(function(index) {
            game.$spaces.eq(index).text(letter);
          });
        } else {
          game.displayMessage(`"${letter.toUpperCase()}" is not in the word.`);
          game.incorrect += 1;
          $apples.addClass(`guess_${game.incorrect}`);
          game.mistakes_left -= 1;
          if (game.mistakes_left === 0) {
            game.displayMessage("Sorry, you've run out of guesses!"); 
            $play_again.removeClass("invisible");
          }
        }
      }
    }
  });
});
