// function makePartialFunc(func, b) {
//   return function (a) {
//     return func(a, b); 
//   }
// }
// 
// function multiply(a, b) {
//   return a * b;
// }
// 
// var multiplyBy5 = makePartialFunc(multiply, 5);
// 
// console.log(multiplyBy5(100)); // 500

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students); 
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
