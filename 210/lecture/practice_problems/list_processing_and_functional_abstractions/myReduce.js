function myReduce(array, func, initial) {
  accum = array[0]
  
  for 
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
