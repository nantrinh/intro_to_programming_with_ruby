// function makeMultipleLister(number) {
//   return function() {
//     var i;
//     for (i = number; i < 100; i += number) {
//       console.log(i); 
//     } 
//   }
// }
// 
// var lister = makeMultipleLister(13);
// lister();

// var total = 0;
// function add(number) {
//   total += number;
//   console.log(total);
// }
// 
// function subtract(number) {
//   total -= number;
//   console.log(total);
// }
// 
// add(1);
// add(42);
// subtract(39);
// add(6);

// function later(func, arg) {
//   return function () {
//     func(arg); 
//   }
// }
// 
// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();
