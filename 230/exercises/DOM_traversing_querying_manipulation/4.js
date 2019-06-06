function colorGeneration(targetGeneration) {
  var generation = 0;
  var parents = [document.body];
  var elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) {
    color(elements);
  }
}

function color(elements) {
  elements.forEach(function(element) {
    element.classList.add("generation-color");
  });
}

function getAllChildrenOf(parents) {
  var i;
  var result = [];
  var children;
  for (i = 0; i < parents.length; i += 1) {
    children = parents[i].children;
    for (j = 0; j < children.length; j += 1) {
      result.push(children[j]);
    }
  }
  return result;
}

colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);
