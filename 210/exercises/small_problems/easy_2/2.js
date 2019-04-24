function logInBox(string) {
  let dashes = '-'.repeat(string.length + 2);
  let spaces = ' '.repeat(string.length + 2);
  console.log(`+${dashes}+`);
  console.log(`|${spaces}|`);
  console.log(`| ${string} |`);
  console.log(`|${spaces}|`);
  console.log(`+${dashes}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
