function arrayToNodes(nodes) {
  var parentNode = document.createElement(nodes[0]);
  var children = nodes[1];
  var i;

  if (children.length > 0) {
    for (i = 0; i < children.length; i += 1) {
      parentNode.appendChild(arrayToNodes(children[i]));
    }
  }

  return parentNode;
}

var nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
arrayToNodes(nodes);

var nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
arrayToNodes(nodes);
