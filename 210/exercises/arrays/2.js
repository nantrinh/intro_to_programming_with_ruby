function copy1(arr) {
  let i;
  let newArr = [];
  for (i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i]); 
  }
  return newArr;
}

function copy2(arr) {
  return arr.slice();
}

function copy3(arr) {
  return [...arr];
}
