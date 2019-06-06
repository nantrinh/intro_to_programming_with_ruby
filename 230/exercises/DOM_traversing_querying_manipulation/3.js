function sliceTree(startId, endId) {
  var result = [];
  var current = document.getElementById(String(endId));
  
  if (
    document.getElementById(String(startId)) === null 
    || current === null 
  ) {
    return undefined; 
  }

  while (current.getAttribute('id') !== String(startId) && current.tagName !== 'BODY') {
    if (current instanceof Element) {
      result.push(current.tagName); 
    }
    current = current.parentNode;  
  }

  if (current.getAttribute('id') === String(startId)) {
    result.push(current.tagName) 
    return result.reverse();
  }
}

console.log(sliceTree(1, 4)); // ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76)); // undefined
console.log(sliceTree(2, 5)); // undefined
console.log(sliceTree(5, 4)); // undefined
console.log(sliceTree(1, 23)); // ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22)); // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19)); // ["SECTION", "P", "SPAN", "STRONG", "A"]
