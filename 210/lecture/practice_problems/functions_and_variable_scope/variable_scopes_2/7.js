var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10);
console.log(total); // 60, because we called incrementBy in the previous
// line, and incremented the global variable 50 by 10
console.log(increment); // 15; still 15 because variable shadowing
// occurred in the function; function arguments have local scope
