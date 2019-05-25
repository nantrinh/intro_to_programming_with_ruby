function myFilter(array, func, thisarg) {
  var result = [];

  array.forEach(function (value) {
    if (func.call(thisarg, value)) {
      result.push(value); 
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

var res = myFilter(
  [2, 1, 3, 4, 5, 6, 9, 12],
  function(val) {
    return this.allowedValues.indexOf(val) >= 0;
  },
  filter); // returns [5, 6, 9]

console.log(res);
