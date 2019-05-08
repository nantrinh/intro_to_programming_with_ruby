function binarySearch(array, searchItem) {
  var counter = 0;
  var high = array.length;
  var low = 0;
  var subArray = array.slice(low, high);  

  while (low !== high) {
    subArray = subArray.slice(low, high);
    midpoint = Math.floor(subArray.length / 2);
    if (subArray[midpoint] === searchItem) {
      return counter + midpoint;
    } else if (subArray[midpoint] > searchItem) {
      high = midpoint; 
      counter += midpoint + 1;
    } else {
      low = midpoint + 1; 
    }
  }
  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
