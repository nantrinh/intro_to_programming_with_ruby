const MIDNIGHT = new Date('1/2/2010 00:00');
const MILLISECONDS_PER_MINUTE = 60000;
  
function beforeMidnight(time) {
  if (time == '00:00') {
    return 0; 
  }
  let date = new Date(`1/1/2010 ${time}`);
  return new Date(MIDNIGHT.getTime() - date.getTime()) / MILLISECONDS_PER_MINUTE;
}

function afterMidnight(time) {
  if (time == '00:00') {
    return 0; 
  }
  let date = new Date(`1/2/2010 ${time}`);
  return new Date(date.getTime() - MIDNIGHT.getTime()) / MILLISECONDS_PER_MINUTE;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686

