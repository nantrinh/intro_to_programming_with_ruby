function hello() {
  a = 'hello';
}

hello(); // since a is not declared anywhere, this function declares a 
// global variable a and assigns it the value "hello"
console.log(a); //  'hello'
