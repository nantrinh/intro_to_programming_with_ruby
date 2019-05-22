function objectsEqual(object1, object2) {
  return (
    Object.keys(object1).every(key => object1[key] === object2[key])
    && Object.keys(object2).every(key => object1[key] === object2[key])
  );
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
