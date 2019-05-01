function isBalanced(string) {
  var cleaned = string.replace(/[^()]/g, '');
  var parens = [];

  if (cleaned.length % 2 !== 0) {
    return false; 
  }

  var i;
  for (i = 0; i < cleaned.length; i += 1) {
    if (cleaned[i] == '(') {
      parens.push(cleaned[i]); 
    } else if (cleaned[i] == ')') {
      if (parens.length == 0) {
        return false;
      } else if (parens.pop() !== '('){
        return false; 
      }
    } 
  }

  return parens.length == 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
