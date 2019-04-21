function determineGrade() {
  let total = 0;
  let quantity = 3;
  for (i = 1; i <= quantity; i += 1) {
    total += Number(prompt(`Enter score ${i}: `));
  }
  let average = total / quantity;
  console.log(`average: ${average}`);
  let letter = 'F';
  if (average >= 90) {
    letter = 'A'
  } else if (average >= 70) {
    letter = 'B' 
  } else if (average >= 50) {
    letter = 'C' 
  }
  console.log(`Based on the average of your 3 scores your letter grade is "${letter}".`);
}

determineGrade();
