function greetings(arr, obj) {
  let fullName = arr.join(' ');
  let fullJob = `${obj.title} ${obj.occupation}`;
  let message = `Hello, ${fullName}! Nice to have a ${fullJob} around.`;
  console.log(message);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
