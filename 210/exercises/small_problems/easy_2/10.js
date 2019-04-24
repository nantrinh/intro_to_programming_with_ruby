function century(year) {
  let centuryNumber = Math.ceil(year / 100);  
  let tensPlace = Math.floor((centuryNumber % 100) / 10);
  let onesPlace = Math.floor(centuryNumber % 10);
  let suffix;
  if (onesPlace >= 4 || onesPlace === 0 || tensPlace === 1) {
    suffix = 'th';
  } else if (onesPlace == 1) {
    suffix = 'st'; 
  } else if (onesPlace == 2) {
    suffix = 'nd'; 
  } else {
    suffix = 'rd'; 
  }
  console.log(`${centuryNumber}${suffix}`); 
  return `${centuryNumber}${suffix}`; 
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
