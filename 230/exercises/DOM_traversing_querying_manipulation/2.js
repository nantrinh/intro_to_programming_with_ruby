function domTreeTracer(id) {
  var result = [];
  var parentNode;
  var siblings;

  while (id > 1) {
    parentNode = document.getElementById(String(id)).parentNode;
    siblings = Array.prototype.slice.call(parentNode.childNodes);
    siblings = siblings.filter(sibling => sibling instanceof Element);
    result.push(siblings.map(sibling => sibling.tagName));
    id = Number(parentNode.getAttribute('id')); 
  }

  result.push([document.getElementById(String(id)).tagName]) 
  return result;
} 

console.log(domTreeTracer(1)); // [["ARTICLE"]]
console.log(domTreeTracer(2)); // [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22)); // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
