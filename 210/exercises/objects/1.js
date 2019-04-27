var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; 
myObject[a]; // should be myObject['a']
myObject.a;

// Line 9 will throw a ReferenceError because `a` has not been declared.
// We want to use the string 'a' instead, to access the property.
