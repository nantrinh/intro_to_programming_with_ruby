var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// function () {
//     return 'Victor';
//   } function () {
//     return 'Reyes';
//   }
// Referencing the function name without the parentheses would
// return the function itself, instead of invoking it. 
