function passwordProgram() {
  password = 'password'
  for (i = 0; i <= 3; i += 1) {
    guess = prompt('What is the password: ');
    if (guess === password) {
      console.log('You have successfully logged in.');
      return;
    }
  }
  console.log('You have been denied access.');
}
