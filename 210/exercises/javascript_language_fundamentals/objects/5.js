var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd', because you added the key:value property '-1': 'd' on line 6
console.log(myArray['e']); // 5, because you added the key:value property 'e': 5 on line 7
console.log(myArray);
// ['a', 'b', 'c', 'f', -1: 'd', e: 5]
