function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
// `undefined`
// this code is equivalent to
// ```
// function say() {
//   var a;
//
//   if (false) {
//     a = 'hello from inside a block';
//   }
//   console.log(a);
// }
// ```
// `a` is declared by never assigned to the string because the
// conditional is always false.
