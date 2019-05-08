function diamond(n) {
  if (typeof n !== 'number' || n % 2 === 0 || n < 1) {
    return 'Argument must be a positive odd integer'; 
  }

  var rows = [];
  var i;
  var spaces;
  var stars;
  for (i = 1; i <= n; i += 2) {
    spaces = ' '.repeat((n - i)/2);
    stars = '*'.repeat(i);
    rows.push(`${spaces}${stars}${spaces}`)
  }
  rows.forEach(row => console.log(row));
  rows.reverse().slice(1).forEach(row => console.log(row));
}

// Error message
diamond(0);
diamond(-1);
diamond(4);
diamond('5');


diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *

diamond(5);
// logs
//   *
//  ***
// *****
//  ***
//   *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
