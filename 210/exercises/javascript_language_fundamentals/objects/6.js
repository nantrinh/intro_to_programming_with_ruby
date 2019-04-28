var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));
// returns 10
// 0 + array[-2] + array[-1] + array[0] + array[1]
// 20 / 2 = 10
// The user seems to to think that you can have negative indexes. The array will
// treat those as properties, and they will not count towards the length of the
// array. The user should only use non-negative indexes if they want to have
// those values considered as elements of the array.
