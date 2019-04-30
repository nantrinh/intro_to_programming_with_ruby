function totalArea(rectanglesArray) {
  var total;
  total = rectanglesArray.reduce (function (accum, sides, index, array) {
    return accum += (sides[0] * sides[1]); 
  }, 0);
  return total;
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectanglesArray) {
  var squares = rectanglesArray.filter(function (sides) {
    return sides[0] == sides[1]; 
  });
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles)); // 121
