function isValidTriangle(sides){
  var sorted = [...sides].sort();
  if (
    sides.length !== 3
    || !(sides.every((side) => typeof side === 'number'))
    || !(sides.every((side) => side > 0))
    || !(sorted.slice(0, 2).reduce((a, b) => a + b) > sorted[2]) 
  ) { 
    return false;
  }
  return true;
}

function countUniqueLengths(sides) {
  var lengths = {};

  sides.forEach(function (side) {
    if (Object.keys(lengths).includes(String(side))) {
      lengths[side] += 1;
    } else {
      lengths[side] = 1;
    }
  });
  return lengths;
}

function triangle(...args) {
  if (!isValidTriangle(args)) {
    return 'invalid';
  }

  var uniqueLengths = countUniqueLengths(args); 
  var maxCount = Object.values(uniqueLengths).reduce((a, b) => a > b ? a : b);
  if (maxCount === 3) {
    return 'equilateral'; 
  } else if (maxCount === 2) {
    return 'isosceles'; 
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"

// invalid
console.log(triangle());
console.log(triangle(''));
console.log(triangle(1, 'hello', 1));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
