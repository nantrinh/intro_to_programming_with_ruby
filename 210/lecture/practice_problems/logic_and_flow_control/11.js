function generatePattern(n) {
  let numberString = ''; 
  let starString = ''; 
  let string = '';
  let i;
  let num_numbers;
  let num_stars;
  if (n > 99 || n < 2 || n % 1 != 0) {
    console.log('Please enter an integer between 2 and 99 inclusive'); 
  }

  for (i = 1; i <= n; i += 1) {
    numberString += String(i); 
  }

  starString = String(Array(numberString.length).fill('*')).replace(/,/g, '');

  for (i = 1; i <= n; i += 1) {
    if (i <= 9) {
      num_numbers = i;
    } else {
      num_numbers = (9 + (i - 9) * 2); 
    }
    num_stars = starString.length - num_numbers;
    string = numberString.slice(0, num_numbers) + starString.slice(0, num_stars);  
    console.log(string);
  }
}

generatePattern(7);
generatePattern(10);
generatePattern(15);
