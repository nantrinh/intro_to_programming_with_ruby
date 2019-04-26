function copyProperties(obj1, obj2) {
  let numCopied = 0;
  let property;
  for (property in obj1) {
    obj2[property] = obj1[property]; 
    numCopied += 1;
  }
  return numCopied;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
