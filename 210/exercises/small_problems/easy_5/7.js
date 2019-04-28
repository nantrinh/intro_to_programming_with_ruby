function swapName(name) {
  let components = name.split(' ')
  let lastName = components.pop();
  return `${lastName}, ${components.join(' ')}`; 
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Joe Tan Roberts'));    // "Roberts, Joe Tan"
