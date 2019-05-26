var prot = {name: 'Gizzards'};
var foo = Object.create(prot);
console.log({}.isPrototypeOf(prot)); // false
console.log(Object.prototype.isPrototypeOf(prot)); // true
console.log({}.isPrototypeOf(foo)); // false
console.log(Object.prototype.isPrototypeOf(foo)); // true

console.log(foo.isPrototypeOf(prot)); // false
console.log(prot.isPrototypeOf(foo)); // true 
console.log(Object.getPrototypeOf(foo)); // {name: 'Gizzards'}
console.log(Object.getPrototypeOf(prot)); // {} 

