function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
}

console.log(average([1, 2, 3, 4, 5])); // 3

let temperatures = [70, 65, 56, 68, 69];
console.log(average(temperatures));

