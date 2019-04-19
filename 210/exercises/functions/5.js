function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// 'This is global'
// equivalent to declaring myvar first, due to JS's hoisting behavior,
// then assigning 'This is global' to it when the function is called.
