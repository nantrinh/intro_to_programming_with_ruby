function oneAtSign(email) {
  return email.indexOf('@') === email.lastIndexOf('@'); 
}

function validLocal(email) {
  var local = email.slice(0, email.indexOf('@'));
  return /^[a-zA-Z0-9]+$/.test(local);
}

function validDomain(email) {
  var domain = email.slice(email.indexOf('@') + 1);
  var components = domain.split('.');
  if (components.length < 2) {
    return false;
  }
  return components.every(word => /^[a-zA-Z]+$/.test(word));
}

function isValidEmail(email) {
  return oneAtSign(email) && validLocal(email) && validDomain(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
