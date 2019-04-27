var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3 (only includes the elements)
console.log(Object.keys(array).length); // 4 (includes the 3.4: 'Oranges' property)

array[-2] = 'Watermelon';
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5
