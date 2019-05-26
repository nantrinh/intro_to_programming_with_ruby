// function getDefiningObject(object, propKey) {
//   var currentObject = object;
//   while (!currentObject.hasOwnProperty(propKey)) {
//     currentObject = Object.getPrototypeOf(currentObject); 
//     if (currentObject === Object.prototype) {
//       return null; 
//     }
//   }
//   return currentObject; 
// }
// 
// var foo = {
//   a: 1,
//   b: 2,
// };
// 
// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);
// 
// bar.c = 3;
// 
// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null
// ===============================================================

// function shallowCopy(object) {
//   var newObject = Object.create(Object.getPrototypeOf(object));
//   Object.getOwnPropertyNames(object).forEach(function (key) {
//     newObject[key] = object[key]; 
//   });
//   return newObject;
// }
// 
// var foo = {
//   a: 1,
//   b: 2,
// };
// 
// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };
// 
// var baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// ===============================================================

function extend(destination) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    source = arguments[i];
    Object.getOwnPropertyNames(source).forEach(function (key) {
      destination[key] = source[key];  
    }); 
  }
  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
