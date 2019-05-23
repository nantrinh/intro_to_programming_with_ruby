function swap(array, idx1, idx2) {
  temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  if (!Array.isArray(array)) {
    return 'Argument must be an array'; 
  } 

  if (array.length < 2) {
    return array; 
  }

  var swapped;
  var i;

  do {
    swapped = false;
    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      } 
    } 
  } while (swapped === true);
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
