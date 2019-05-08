function template(n) {
  var template = new Array(n).fill(' ');
  return template;
}

function star(n) {
  if (typeof n !== 'number' || n < 7 || n % 2 === 0) {
    return 'Argument must be an odd integer greater than or equal to 7.'; 
  }

  var rows = ['*'.repeat(n)]
  var newRow;
  var midpoint = Math.floor(n / 2);
  var rightIndex = midpoint + 1;
  var leftIndex = midpoint - 1;
  while (rightIndex < n) {
    newRow = template(n); 
    newRow[midpoint] = '*';
    newRow[leftIndex] = '*';
    newRow[rightIndex] = '*';
    rows.push(newRow.join(''));
    leftIndex -= 1;
    rightIndex += 1;
  }

  rows.reverse().forEach(row => console.log(row));
  rows.reverse().slice(1).forEach(row => console.log(row));
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
