function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting();

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// The randomGreeting() function does not have an explicit return statement, so
// when we call it, the return value would always be the function value 
//
// Line 16 does not call the randomGreeting function properly. Should be randomGreeting();
