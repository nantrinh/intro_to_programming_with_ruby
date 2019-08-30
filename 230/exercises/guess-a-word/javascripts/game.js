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

var words = ["apple", "banana", "orange", "pear"];

var randomWord = function() {
  var word = words[Math.floor(Math.random() * words.length)]; 
  words.splice(words.indexOf(word), 1);
  return word;
};

$(function () {
  function Game() {
    this.word = randomWord(); 
    this.incorrect = 0;
    this.mistakes_left = 6;
    this.letters_guessed = new Set();
    this.correct_guesses = 0;
    this.won = false;
    $word_bag.text(`There are ${words.length} words remaining in the bag.`);
    if (words.length === 0) {
      this.displayMessage("Sorry, I've run out of words!"); 
      return;
    }
    this.init();
  };

  Game.prototype = {
    createBlanks: function() {
      var spaces = (new Array(this.word.length + 1)).join("<span></span>"); 
      $letters.find("span").remove();
      $letters.append(spaces);
      this.$spaces = $("#spaces span");
    },
    outputCorrectGuesses: function (indexes, letter) {
      indexes.forEach(function(index) {
       this.$spaces.eq(index).text(letter);
      }, this);
    },
    outputGuess: function (letter) {
      $guesses.append(`<span>${letter.toUpperCase()}</span`); 
    },
    incrementIncorrectGuess: function(letter) {
      this.displayMessage(`"${letter.toUpperCase()}" is not in the word.`);
      this.incorrect += 1;
      $apples.addClass(`guess_${this.incorrect}`);
      this.mistakes_left -= 1;
    },
    oldGuess: function(letter) {
      this.displayMessage(`You have already guessed "${letter.toUpperCase()}".`);
    },
    newGuess: function(letter) {
      this.letters_guessed.add(letter);
      this.outputGuess(letter);
      var indexes = indexesOfMatches(game.word, letter);
      if (indexes.length > 0) {
        this.outputCorrectGuesses(indexes, letter);
        this.correct_guesses += indexes.length
        if (this.correct_guesses === this.word.length) {
          this.won = true; 
          this.gameOver();
        }
      } else {
        this.incrementIncorrectGuess(letter);
        if (this.mistakes_left === 0) {
          this.gameOver();
        }
      }
    },
    gameOver: function() {
      if (this.won) {
        this.displayMessage("You win!");
        $body.addClass("win");
      } else {
        this.displayMessage("Sorry, you've run out of guesses!"); 
        $body.addClass("lose");
      }
      $play_again.removeClass("invisible");
      $(document).unbind("keypress");
    },
    displayMessage: function(text) {
      $message.text(text);
      $message.removeClass("invisible");
    },
    init: function() {
      this.createBlanks(); 
      $guesses.find("span").remove();
      $play_again.addClass("invisible");
      $(document).keypress(gameHandler);
      $apples.removeClass();
      $body.removeClass();
    }
  }

  var $message = $("#message");
  var $letters= $("#spaces");
  var $guesses = $("#guesses");
  var $apples = $("#apples");
  var $play_again = $("#replay");
  var $word_bag = $("#word_bag");
  var $body = $("body");

  var game = new Game();

  var gameHandler = function(e) {
    if (e.keyCode >= 97 && e.keyCode <= 122) {
      $message.addClass("invisible");
      var letter = String.fromCharCode(e.keyCode);
      if (game.letters_guessed.has(letter)) {
        game.oldGuess(letter);
      } else {
        game.newGuess(letter);
      }
    }
  };

  $(document).keypress(gameHandler);
  $play_again.click(function (e) {
    e.preventDefault();
    game = new Game(); 
  });
});
