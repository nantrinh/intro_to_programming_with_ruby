function isLastIncluded() {
  let numbers = [];
  let i;
  let queries = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  for (i = 0; i < queries.length; i += 1) {
    input = Number(prompt(`Enter the ${queries[i]} number: `));
    numbers.push(input); 
  }
  let last = numbers.pop();
  let appears = numbers.includes(last) ? 'appears' : 'does not appear';
  return `The number ${last} ${appears} in [${numbers.join(', ')}].`;
}

isLastIncluded();
