var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// At line 8,  we have array2 identical to array1.
// Lines 9-13 reassigns the elements of array1 which begin with the letter C, to their uppercased equivalent.  
// Since we added elements to array2 one by one, as primitive string values, when the values of array1 were changed, this did not have any effect on the values of array2.
