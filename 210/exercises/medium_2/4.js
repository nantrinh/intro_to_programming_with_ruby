function makeDoubler(name) {
  return function (number) {
    console.log('This function was called by ' + name + '.');
    return number + number; 
  }
}


var doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.
