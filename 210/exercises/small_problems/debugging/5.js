
function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0; 
  }

  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
