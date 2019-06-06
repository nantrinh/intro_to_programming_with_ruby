function nodesToArr() {
  return getChildren(document.body);
}

function getChildren(element) {
  var result = [element.tagName];
  var i;
  var children = element.children;

  if (children.length === 0) {
    result.push([])
    return result; 
  }

  for (i = 0; i < children.length; i += 1) {
    result.push(getChildren(children[i])); 
  }

  return result; 
}

nodesToArr();
