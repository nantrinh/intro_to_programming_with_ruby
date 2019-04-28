const DEGREE_SYMBOL = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_DEGREE = 3600;

function dms(number) {
  let degree = Math.floor(number);
  let minutes = Math.floor((number - degree) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((number - degree - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);
  return `${degree}${DEGREE_SYMBOL}${pad(minutes)}'${pad(seconds)}"`; 
}

function pad(number) {
  if (number <= 9) {
    return `0${number}`; 
  } else {
    return String(number); 
  } 
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
