const MILLISECONDS_PER_MINUTE = 60000;
const midnight = new Date('01/01/2019 00:00'); 

function timeOfDay(offset) {
  return formatTime(new Date(midnight.getTime() + (offset * MILLISECONDS_PER_MINUTE)));
}

function pad(number) {
  if (number <= 9) {
    return `0${number}`;
  } else {
    return number; 
  }
}

function formatTime(date) {
  let hour = pad(date.getHours());
  let min = pad(date.getMinutes());
  return `${hour}:${min}`;
}

console.log(formatTime(new Date('April 26, 2019 23:57:00')));
console.log(formatTime(new Date('April 26, 2019 00:05:00')));
console.log(formatTime(new Date('April 26, 2019 09:30:00')));

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
