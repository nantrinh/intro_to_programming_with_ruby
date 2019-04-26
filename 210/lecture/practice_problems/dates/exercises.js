const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let today = new Date();

function dateSuffix(dayOfMonth) {
  let tens = Math.floor((dayOfMonth % 100) / 10);
  let ones = dayOfMonth % 10;
  if (tens == 1) {
    return 'th'; 
  } else if (ones == 1) {
    return 'st'; 
  } else if (ones == 2) {
    return 'nd'; 
  } else if (ones == 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

function formattedDate(date) {
  let dayOfWeek= daysOfWeek[date.getDay()];
  let dayOfMonth = date.getDate();
  let month = months[date.getMonth()];
  let suffix = dateSuffix(dayOfMonth);
  return `${dayOfWeek}, ${month} ${dayOfMonth}${suffix}`
}

console.log(`Today's day is ${formattedDate(today)}.`);

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(tomorrow));

let nextWeek = new Date(today.getTime());
console.log(nextWeek.toDateString() === today.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(date) {
  let hour = date.getHours();
  let min = date.getMinutes();
  return `${numberToString(hour)}:${numberToString(min)}`;
}

function numberToString(number) {
  if (number <= 9) {
    return `0${number}`; 
  } else {
    return String(number);
  }
}

let date1 = new Date('December 17, 1995 03:06:00');
console.log(formatTime(date1));
let date2 = new Date('March 9, 2000 15:30:05');
console.log(formatTime(date2));
