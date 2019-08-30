$(function () {
  var randomWord = (function() {
    var words = ["apple", "banana", "orange", "pear"];

    return function() {
      var word = words[Math.floor(Math.random() * words.length)]; 
      words.splice(words.indexOf(word), 1);
      return word;
    };
  })();

  function Game() {
    this.word = randomWord(); 
    this.incorrect = 0;
    this.letters_guessed = new Set();
    this.correct_spaces = 0;
    if (!this.word) {
      this.displayMessage("Sorry, I've run out of words!"); 
      return;
    }
    this.word = this.word.split("");
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
    },
    init: function() {
      this.createBlanks(); 
    }
  }

  var $message = $("#message");
  var $letters= $("#spaces");
  var $guesses = $("#guesses");
  var $apples = $("#apples");

  var game = new Game();

  $(document).keypress(function(e) {
    if (e.keyCode >= 97 && e.keyCode <= 122) {

      game.letters_guessed.add(String.fromCharCode(e.keyCode));
      console.log(game.letters_guessed);
    }
  });
});
