function whenToRetire() {
  let age = Number(prompt('What is your age? ')); 
  let retirementAge = Number(prompt('At what age would you like to retire? ')); 
  let difference = retirementAge - age;
  let currentYear = new Date().getFullYear();
  console.log(`It's ${currentYear}. You will retire in ${currentYear + difference}.`);
  console.log(`You have only ${difference} years of work to go!`);
}

whenToRetire();
