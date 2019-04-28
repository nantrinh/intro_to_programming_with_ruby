function countOccurrences(arr) {
  let counts = {};
  let i;
  for (i = 0; i < arr.length; i += 1) {
    if (Object.keys(counts).includes(arr[i])) {
      counts[arr[i]] += 1; 
    } else {
      counts[arr[i]] = 1; 
    } 
  }
  for (key in counts) {
    console.log(`${key} => ${counts[key]}`);  
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
