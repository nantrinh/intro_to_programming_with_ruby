function myReduce(array, func, initial) {
  var start;
  if (initial === undefined) {
    initial = array[0];
    start = 1;
  } else {
    start = 0; 
  }
  
  var result = initial;
  for (i = start; i < array.length; i += 1) {
    result = func(result, array[i]); 
  } 
  return result;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
